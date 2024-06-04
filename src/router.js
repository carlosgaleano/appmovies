let ROUTES = {};
let rootEl;

export const setRootEl = (nodoRoot) => {
  rootEl = nodoRoot;
}

export const setRoutes = (routes) => {
  if (typeof routes !== 'object' || !routes['/error']) {
    throw new Error('Routes must be an object and must define an /error route');
  }
  Object.assign(ROUTES, routes);
}

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
}

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = '';

  const route = ROUTES[pathname] || ROUTES['/error'];
  rootEl.appendChild(route(props));
}

export const navigateTo = (pathname, props = {}) => {
  const url = new URL(window.location.href);
  url.pathname = pathname;
  url.search = new URLSearchParams(props).toString();
  window.history.pushState({}, '', url.toString());

  renderView(pathname, props);
}

export const onURLChange = (location = '/') => {
  const url = new URL(window.location.href);
  const pathname = url.pathname;
  const searchParams = queryStringToObject(url.search);

  renderView(pathname, searchParams);
}
