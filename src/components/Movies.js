// importar la funcion getMovies (que trae el el return del fetch (promesa)) 
import dataResult from '../lib/getMovies'; // Adjust the path as necessary
import {
    detailsResult
} from '../lib/getMovies';
import {  showMovieDetails } from './Detail.js'; // Adjust the path as necessary
// el .then lo utilizo porque es una respuesta asincrona
import { navigateTo } from '../router.js';
// importar la funcion navigateTo

const Movies = () => {
    const ul = document.createElement('ul')


    return dataResult().then(result => {

        const arrayMoviesList = result.results;

        arrayMoviesList.forEach(item => {
            const liElement = document.createElement('li');
            // agregar un evento a liElement
            // cuando des clic primero haz un console.log que imprimia la ruta a donde quieres ir
            // la ruta sera lo que incluya el id de la pelicula
            // ejemplo de la respuesta que imprimira el console.log = '/detail?=23123'

            // segundo dentro del evento ejecutar la funcion navigateTo y psarle la ruta como argumento
            // navigateTo('/detail', {id:23123})
            liElement.classList.add('card');

            const originTitle = document.createElement('h2');
            originTitle.textContent = item.original_title;

            const newImage = document.createElement('img');
            newImage.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            newImage.alt = item.original_title;
            newImage.classList.add('poster');

            const year = document.createElement('p');
            year.textContent = item.release_date;


            const detailButton = document.createElement('button');
            detailButton.textContent = 'Ver Detalles';
          //  detailButton.addEventListener('click', () => showMovieDetails(item.id));
          detailButton.addEventListener('click', () => navigateTo('/detail', { id: item.id }));

            liElement.appendChild(originTitle);
            liElement.appendChild(newImage);
            liElement.appendChild(year);
            liElement.appendChild(detailButton);
            ul.appendChild(liElement);
        });
        return ul;

    }).catch(error => {
        console.error('Error fetching movies:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'error fetching movies';
        return errorMessage;
    });

};
// Función details que maneja los detalles adicionales
// aqui no se usa esta funcion
const details = () => {
    return detailsResult().then(result => {
        const arrayDetailsList = result.results;
        arrayDetailsList.forEach(item => {

            const liDetails = document.createElement('p');
            liDetails.textContent = `Some additional details about ${item.original_title}`;

            const genres = documente.createElement('p');
            genres.textContent = item.arrayDetailsList;

            liElement.appendChild(liDetails);
            liElement.appendChild(genres);
        });

        console.log('Detalles de las películas:', arrayDetailsList);
        // Por ejemplo, podrías devolver o manipular el DOM aquí también
    }).catch(error => {
        console.error('Error fetching movie details:', error);
    });
};

// Exporta ambas funciones
export default Movies;