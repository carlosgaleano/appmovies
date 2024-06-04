import { Home } from './views/home.js';
import {Error } from './views/error.js'
import {DetailView } from './views/detail.js'
import { setRootEl, setRoutes, onURLChange } from './router.js';

const root = document.getElementById('root');//aqui debe ir el append de app

// ... import other views

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': Error,
  '/detail': (params) => {

    console.log(params);
    // Verificar si se pasaron parámetros
    if (params && params.id) {
      // Extraer el ID de la película de los parámetros de la URL
      const { id } = params;
      // Renderizar la vista de detalles con el ID de la película
      return DetailView({ id });
    } else {
      // Si no se pasaron parámetros, redirigir a la página de error
      return Error();
    }
  }
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root);
onURLChange(window.location.pathname);
});

