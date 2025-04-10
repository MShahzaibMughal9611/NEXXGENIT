
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/NEXXGENIT/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/NEXXGENIT"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: '991871cec029e1c77ea15b3f2680fea20059372abed5cd26a696925f26aa547c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'd15000430e2459e68436d7ea53234e0a868674a43f5ed548788ae24d2a91c3e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20847, hash: 'b7555fdd4017b1e6837f8818ceaab0f38d0f8d09153294007a5eb170d57d5ee5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
