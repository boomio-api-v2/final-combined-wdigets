import Cell from "./cell.js";
import { sleep } from "./utils.js";
// import { DIR, PATH_STR, readPathStr } from "./path.js";

export default class Maze {
  constructor({
    row_count = 5,
    col_count = 5,
    cell_size = 30,
    startCell = { row: 2, col: 2 },
    startArea = { rowFrom: 0, rowTo: 2, colFrom: 0, colTo: 2 },
    finishCell = { row: row_count - 5, col: col_count - 5 },
    finishArea = { rowFrom: row_count - 5, rowTo: row_count - 1, colFrom: col_count - 5, colTo: col_count - 1 },
    cursorRow = 2,
    cursorColumn = 2,
  }) {
    this.row_count = row_count;
    this.col_count = col_count;
    this.cell_size = cell_size;
    this.startArea = startArea;
    this.finishArea = finishArea;
    this.cursorRow = cursorRow;
    this.cursorColumn = cursorColumn;
    this.grid = this.createGrid(row_count, col_count, cell_size);
    this.startCell = this.grid[this.index(startCell.row, startCell.col)];
    this.finishCell = this.grid[this.index(finishCell.row, finishCell.col)];
    this.createMoveButton();
    this.setStartPosition();

    this.rightEl = document.getElementById('right');
    this.leftEl = document.getElementById('left');
    this.upEl = document.getElementById('up');
    this.downEl = document.getElementById('down');

    this.rightEl.addEventListener('click', () => this.moveright());
    this.leftEl.addEventListener('click', () => this.moveleft());
    this.upEl.addEventListener('click', () => this.moveup());
    this.downEl.addEventListener('click', () => this.movedown());

    document.addEventListener('keydown', (e) => {
      const key = e.key;
      if (key === "ArrowLeft" || key === "a") this.moveleft()
      if (key === "ArrowRight" || key === "d") this.moveright()
      if (key === "ArrowUp" || key === "w") this.moveup()
      if (key === "ArrowDown" || key === "s") this.movedown()
    });

    this.moveup = () => {
      if (this.cursorRow === this.startCell.row && this.cursorColumn === this.startCell.col) return
      if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.top === true) return
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
      this.cursorRow -= 1
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
    }

    this.movedown = () => {
      if (this.cursorRow + 1 === finishCell.row && this.cursorColumn === finishCell.col) {
        console.log('win')
        this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
      }

      if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.bottom === true) return
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
      this.cursorRow += 1
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true

    }

    this.moveleft = () => {
      if (this.cursorRow === startCell.row && this.cursorColumn === startCell.col) return
      if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.left === true) return
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
      this.cursorColumn -= 1
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
    }

    this.moveright = () => {

      if (this.cursorRow === finishCell.row && this.cursorColumn + 1 === finishCell.col) {
        console.log('win')
        this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
      }
      if (this.grid[this.index(this.cursorRow, this.cursorColumn)].walls.right === true) return

      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = false
      this.cursorColumn += 1
      this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
    }

  }

  setStartPosition() {
    this.grid[this.index(this.cursorRow, this.cursorColumn)].cursor = true
  }

  createMoveButton = () => {
    const btnsEl = document.createElement('div');
    const btnRight = document.createElement('button');
    const btnLeft = document.createElement('button');
    const btnUp = document.createElement('button');
    const btnDown = document.createElement('button');
    btnRight.setAttribute('id', 'right')
    btnLeft.setAttribute('id', 'left')
    btnUp.setAttribute('id', 'up')
    btnDown.setAttribute('id', 'down')
    btnRight.classList.add('move-button')
    btnLeft.classList.add('move-button')
    btnUp.classList.add('move-button')
    btnDown.classList.add('move-button')
    btnRight.innerHTML = '→'
    btnLeft.innerHTML = '←'
    btnUp.innerHTML = '↑'
    btnDown.innerHTML = '↓'
    btnsEl.append(btnDown, btnUp, btnLeft, btnRight)
    document.body.appendChild(btnsEl)
  }

  index(row, col) {
    if (col < 0 || col >= this.col_count || row < 0 || row >= this.row_count || (this.inArea(row, col, this.startArea.rowFrom, this.startArea.rowTo, this.startArea.colFrom, this.startArea.colTo) && !(row === this.startArea.rowTo && col === this.startArea.colTo)) || (this.inArea(row, col, this.finishArea.rowFrom, this.finishArea.rowTo, this.finishArea.colFrom, this.finishArea.colTo) && !(row === this.finishArea.rowFrom && col === this.finishArea.colFrom)))
      return -1;
    return col + row * this.col_count;
  }

  inArea(r, c, rFrom, rTo, cFrom, cTo) {
    if ((r >= rFrom && r <= rTo) && (c >= cFrom && c <= cTo)) { return true } else { return false };
  }
  cleanArea(rFrom, rTo, cFrom, cTo) {
    for (let i = rFrom; i <= rTo; i++) {
      for (let j = cFrom; j <= cTo; j++) {
        // console.log(this.grid[j + i * this.col_count])
        this.grid[j + i * this.col_count].walls.bottom = false
        this.grid[j + i * this.col_count].walls.right = false
        this.grid[j + i * this.col_count].walls.left = false
        this.grid[j + i * this.col_count].walls.top = false
      }
    }
  }


  createGrid(row_count, col_count, cell_size) {
    let grid = [];
    for (let row = 0; row < row_count; row++) {
      for (let col = 0; col < col_count; col++) {
        grid.push(new Cell({ row: row, col: col, size: cell_size }));
      }
    }
    return grid;
  }

  async generateMaze_DFS({
    startCell = this.startCell,
    finishCell = this.finishCell,
    sleepTime = 0,
    startArea = this.startArea,
    finishArea = this.finishArea,
  }) {
    let currentCell = startCell;
    let stack = [currentCell];

    this.cleanArea(startArea.rowFrom, startArea.rowTo, startArea.colFrom, startArea.colTo)
    this.cleanArea(finishArea.rowFrom, finishArea.rowTo, finishArea.colFrom, finishArea.colTo)

    while (stack.length > 0) {
      currentCell.visited = true;
      currentCell.isHightlight = false;
      let next = this.getRandomNeighborNotVisited(currentCell);
      if (next) {
        next.visited = true;
        stack.push(currentCell);
        this.removeWalls(currentCell, next);
        currentCell = next;
      } else if (stack.length > 0) {
        currentCell.isDone = true;
        currentCell = stack.pop();
      }
      currentCell.isHightlight = true;
      if (sleepTime) await sleep(sleepTime);
    }
  }
  // async makePath(path, sleepTime) {
  //   let currentCell = this.grid[this.index(9, 1)];
  //   for (let dir of path) {
  //     let nextCell;
  //     let neighbors = this.getNeighbors(currentCell);
  //     if (dir == DIR.UP) {
  //       nextCell = neighbors.top;
  //     } else if (dir == DIR.DOWN) {
  //       nextCell = neighbors.bottom;
  //     } else if (dir == DIR.LEFT) {
  //       nextCell = neighbors.left;
  //     } else if (dir == DIR.RIGHT) {
  //       nextCell = neighbors.right;
  //     }
  //     this.removeWalls(currentCell, nextCell);
  //     currentCell.visited = true;
  //     currentCell.isDone = true;
  //     currentCell = nextCell;
  //     if (sleepTime) await sleep(sleepTime);
  //   }
  // }

  // async makePathFromText(text, sleepTime) {
  //   let fullPath = [];
  //   for (let c of text.toUpperCase()) {
  //     fullPath.push(...readPathStr(PATH_STR[c]));
  //     fullPath.push(...readPathStr(PATH_STR[" "]));
  //   }

  //   this.makePath(fullPath, sleepTime);
  // }

  removeWalls(cellA, cellB) {
    let dx = cellA.col - cellB.col;
    if (dx == 1) {
      cellA.walls.left = false;
      cellB.walls.right = false;
    } else if (dx == -1) {
      cellA.walls.right = false;
      cellB.walls.left = false;
    }

    let dy = cellA.row - cellB.row;
    if (dy == 1) {
      cellA.walls.top = false;
      cellB.walls.bottom = false;
    } else if (dy == -1) {
      cellA.walls.bottom = false;
      cellB.walls.top = false;
    }
  }

  getRandomNeighborNotVisited(cell) {
    let neighbors = this.getNeighbors(cell);
    let neighborsArray = Object.values(neighbors).filter(
      (n) => n && !n.visited
    );

    if (neighborsArray.length > 0) {
      var randomIndex = floor(random(0, neighborsArray.length));
      return neighborsArray[randomIndex];
    } else {
      return null;
    }
  }

  getNeighbors(cell) {
    let x = cell.col;
    let y = cell.row;

    return {
      top: this.grid[this.index(y - 1, x)],
      right: this.grid[this.index(y, x + 1)],
      bottom: this.grid[this.index(y + 1, x)],
      left: this.grid[this.index(y, x - 1)],
    };
  }

  draw() {
    for (let cell of this.grid) {
      cell.draw();
    }
    // this.startCell.draw("darkgrey");
    this.finishCell.draw("yellow");
  }
}
