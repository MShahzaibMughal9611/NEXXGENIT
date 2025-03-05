
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://MShahzaibMughal9611.github.io/NEXXGENIT/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/NEXXGENIT"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 540, hash: '6220667445153ab0b47270a99766ec481cc0aa088f65dfac0bbb3a5ac24e88e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '63f0eb422bf92c763bbb63ff1ec74f749a22545e8f1b1f3335803e64f553bf6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20881, hash: '73fbc04b24a4296afe3df0fc8cf2820898e606a5e0be158efabd8382f6d85677', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
