
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'NEXXGENIT',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/NEXXGENIT"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 501, hash: 'ec5e0aa70afaf9388f327ba2a4c449c77a276de127aa9ff0deab758afd18d259', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '375afe13b9e3e10317146a868e8d699be5f9f83268574a3649a98b467ba95279', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20842, hash: 'f3329e1bf4193aa4f920f1c461914d078b92339175e2334cfbe00fdbc1e88409', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
