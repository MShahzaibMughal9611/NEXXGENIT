
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MShahzaibMughal9611/NEXXGENIT/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MShahzaibMughal9611/NEXXGENIT"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: 'd17401eb989d2fff752567484170ed8eb54522f03eba128a42f3520901fd5b88', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '223d933f7dfebf5ef63bcb8bff6b9317c004e0e017c6207a56eb260a32a18662', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20867, hash: '66756f4d19b3eae3428240e3d5cf51ebf1bdf82bbec2a3b5fde2fd069d6e3618', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
