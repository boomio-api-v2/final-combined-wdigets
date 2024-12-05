class PxLoader {
  constructor(settings = {}) {
    // merge settings with defaults
    this.settings = {
      statusInterval: settings.statusInterval ?? 5000, // every 5 seconds by default
      loggingDelay: settings.loggingDelay ?? 20 * 1000, // log stragglers after 20 secs
      noProgressTimeout: settings.noProgressTimeout ?? Infinity, // do not stop waiting by default
    };

    this.entries = []; // holds resources to be loaded with their status
    this.completionListeners = [];
    this.progressListeners = [];
    this.timeStarted = null;
    this.progressChanged = Date.now();
  }

  // Enum for the status of a resource
  static ResourceState = {
    QUEUED: 0,
    WAITING: 1,
    LOADED: 2,
    ERROR: 3,
    TIMEOUT: 4,
  };

  // Ensure non-array values are placed into an array
  ensureArray(val) {
    return Array.isArray(val) ? val : val ? [val] : [];
  }

  // Add an entry to the list of resources to be loaded
  add(resource) {
    resource.tags = new PxLoaderTags(resource.tags);

    // Ensure priority is set
    resource.priority = resource.priority ?? Infinity;

    this.entries.push({
      resource,
      status: PxLoader.ResourceState.QUEUED,
    });
  }

  addProgressListener(callback, tags) {
    this.progressListeners.push({
      callback,
      tags: new PxLoaderTags(tags),
    });
  }

  addCompletionListener(callback, tags) {
    this.completionListeners.push({
      tags: new PxLoaderTags(tags),
      callback: (e) => {
        if (e.completedCount === e.totalCount) {
          callback(e);
        }
      },
    });
  }

  // Creates a comparison function for resources
  getResourceSort(orderedTags) {
    orderedTags = this.ensureArray(orderedTags);
    const getTagOrder = (entry) => {
      const resource = entry.resource;
      let bestIndex = Infinity;
      for (var i = 0; i < resource.tags.length; i++) {
        for (let j = 0; j < Math.min(orderedTags.length, bestIndex); j++) {
          if (tag === orderedTags[j] && j < bestIndex) {
            bestIndex = j;
            if (bestIndex === 0) break;
          }
        }
      }

      return bestIndex;
    };

    return (a, b) => {
      const aOrder = getTagOrder(a);
      const bOrder = getTagOrder(b);

      return aOrder - bOrder || a.priority - b.priority;
    };
  }

  start(orderedTags) {
    this.timeStarted = Date.now();

    // Order the resources
    const compareResources = this.getResourceSort(orderedTags);
    this.entries.sort(compareResources);

    // Trigger requests for each resource
    this.entries.forEach((entry) => {
      entry.status = PxLoader.ResourceState.WAITING;
      entry.resource.start(this);
    });

    // Initial status check
    setTimeout(this.statusCheck.bind(this), 100);
  }

  statusCheck() {
    let checkAgain = false;
    const noProgressTime = Date.now() - this.progressChanged;
    const timedOut = noProgressTime >= this.settings.noProgressTimeout;
    const shouldLog = noProgressTime >= this.settings.loggingDelay;

    for (const entry of this.entries) {
      if (entry.status !== PxLoader.ResourceState.WAITING) continue;

      // Check the resource's status
      if (entry.resource.checkStatus) {
        entry.resource.checkStatus();
      }

      // Handle timeout
      if (entry.status === PxLoader.ResourceState.WAITING) {
        if (timedOut) {
          entry.resource.onTimeout();
        } else {
          checkAgain = true;
        }
      }
    }

    // Log pending resources
    if (shouldLog && checkAgain) {
      this.log();
    }

    // Re-check if needed
    if (checkAgain) {
      setTimeout(this.statusCheck.bind(this), this.settings.statusInterval);
    }
  }

  isBusy() {
    return this.entries.some(
      (entry) =>
        entry.status === PxLoader.ResourceState.QUEUED ||
        entry.status === PxLoader.ResourceState.WAITING,
    );
  }

  // Handle progress updates
  onProgress(resource, statusType) {
    const entry = this.entries.find((entry) => entry.resource === resource);

    // Already updated status
    if (!entry || entry.status !== PxLoader.ResourceState.WAITING) return;

    entry.status = statusType;
    this.progressChanged = Date.now();

    // Notify listeners
    const listeners = [...this.progressListeners, ...this.completionListeners];

    for (const listener of listeners) {
      const shouldCall = listener.tags.length === 0 || resource.tags.intersects(listener.tags);
      if (shouldCall) {
        this.sendProgress(entry, listener);
      }
    }
  }

  onLoad(resource) {
    this.onProgress(resource, PxLoader.ResourceState.LOADED);
  }

  onError(resource) {
    this.onProgress(resource, PxLoader.ResourceState.ERROR);
  }

  onTimeout(resource) {
    this.onProgress(resource, PxLoader.ResourceState.TIMEOUT);
  }

  // Sends a progress report to a listener
  sendProgress(updatedEntry, listener) {
    let completed = 0;
    let total = 0;

    for (const entry of this.entries) {
      const includeResource =
        listener.tags.length === 0 || entry.resource.tags.intersects(listener.tags);
      if (includeResource) {
        total++;
        if (
          entry.status === PxLoader.ResourceState.LOADED ||
          entry.status === PxLoader.ResourceState.ERROR ||
          entry.status === PxLoader.ResourceState.TIMEOUT
        ) {
          completed++;
        }
      }
    }

    listener.callback({
      resource: updatedEntry.resource,
      loaded: updatedEntry.status === PxLoader.ResourceState.LOADED,
      error: updatedEntry.status === PxLoader.ResourceState.ERROR,
      timeout: updatedEntry.status === PxLoader.ResourceState.TIMEOUT,
      completedCount: completed,
      totalCount: total,
    });
  }

  // Logs the status of each resource to the console
  log(showAll = false) {
    if (!window.console) return;

    const elapsedSeconds = Math.round((Date.now() - this.timeStarted) / 1000);
    console.log('PxLoader elapsed: ' + elapsedSeconds + ' sec');

    this.entries.forEach((entry, i) => {
      if (!showAll && entry.status !== PxLoader.ResourceState.WAITING) return;

      let message = `PxLoader: #${i} ${entry.resource.getName()}`;
      switch (entry.status) {
        case PxLoader.ResourceState.QUEUED:
          message += ' (Not Started)';
          break;
        case PxLoader.ResourceState.WAITING:
          message += ' (Waiting)';
          break;
        case PxLoader.ResourceState.LOADED:
          message += ' (Loaded)';
          break;
        case PxLoader.ResourceState.ERROR:
          message += ' (Error)';
          break;
        case PxLoader.ResourceState.TIMEOUT:
          message += ' (Timeout)';
          break;
      }

      if (entry.resource.tags.length > 0) {
        message += ' Tags: [' + entry.resource.tags.all.join(',') + ']';
      }

      console.log(message);
    });
  }
}

// Tag object to handle tag intersection
class PxLoaderTags {
  constructor(values) {
    this.all = [];
    this.first = null; // cache the first value
    this.length = 0;
    this.lookup = {}; // holds values as keys for quick lookup

    if (values) {
      if (Array.isArray(values)) {
        this.all = values.slice();
      } else if (typeof values === 'object') {
        this.all = Object.keys(values);
      } else {
        this.all.push(values);
      }

      this.length = this.all.length;
      if (this.length > 0) {
        this.first = this.all[0];
      }

      // Quick lookup for intersection
      this.all.forEach((value) => {
        this.lookup[value] = true;
      });
    }
  }

  // Compare this object with another; return true if they share at least one value
  intersects(other) {
    if (this.length === 0 || other.length === 0) return false;

    if (this.length === 1 && other.length === 1) {
      return this.first === other.first;
    }

    // Loop through smaller object for efficiency
    if (other.length < this.length) {
      return other.intersects(this);
    }

    return this.all.some((key) => other.lookup[key]);
  }
}

export default PxLoader;
