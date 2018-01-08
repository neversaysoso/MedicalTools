const navigationBar = weex.requireModule('navigationBar');
const navigator = weex.requireModule('navigator');
import { Utils } from 'weex-ui';

export const setTitle = (title) => {
  document.title = title
  if (navigationBar && navigationBar.setTitle) {
    const NOOP = () => { };
    navigationBar.setTitle({
      title
    }, NOOP, NOOP);
  }
}