class WidgetHtmlService {
  public container: HTMLElement;
  createWidgetContainer = () => {
    const widgetScreenWrapper = document.createElement('div');
    widgetScreenWrapper.classList.add('boomio-widget-screen-wrapper');
    const widgetContent = document.createElement('div');
    widgetContent.setAttribute('id', 'boomio-widget-content');
    widgetScreenWrapper.appendChild(widgetContent);
    document.body.appendChild(widgetScreenWrapper);
    this.container = widgetContent;
  };
}

export default new WidgetHtmlService();
