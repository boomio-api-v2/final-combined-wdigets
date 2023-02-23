import type { StyleObject } from '@/types';

export const addStylesToHtml = (cssRules: string) => {
  const style = document.createElement('style');
  style.setAttribute('id', 'boomio--stylesheet');
  document.getElementsByTagName('head')[0].appendChild(style);
  style.appendChild(document.createTextNode(cssRules));
};

export const assignStyleOnElement = (style: CSSStyleDeclaration, properties: StyleObject) => {
  Object.assign(style, properties);
};
