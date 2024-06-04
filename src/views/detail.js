//esto es un ejemplo

import { fetchMovieDetails } from '../components/getMoviesDetails.js';

export const DetailView = (props) => {
    const { id } = props;
   // const el = document.createElement("h1");
    //el.innerHTML = "Que onda soy el detalle de la peli";

    const html = document.createElement('div');
    html.id = 'detail-view';
    fetchMovieDetails(id, (data) => {
        const movieTitle = document.createElement('h1');
        movieTitle.textContent = data.title;
    
        const movieOverview = document.createElement('p');
        movieOverview.textContent = data.overview;
    
        const movieReleaseDate = document.createElement('p');
        movieReleaseDate.textContent = `Release Date: ${data.release_date}`;
    
        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        moviePoster.alt = data.title;
    
        html.appendChild(movieTitle);
        html.appendChild(movieOverview);
        html.appendChild(movieReleaseDate);
        html.appendChild(moviePoster);
      });
    
      return html;

}

/* import { fetchMovieDetails } from '../components/getMoviesDetails.js';

export const DetailView = (props) => {
    const { id } = props;
  
    

    const html = document.createElement('div');
    html.id = 'detail-view';
  
    fetchMovieDetails(id, (data) => {
      const movieTitle = document.createElement('h1');
      movieTitle.textContent = data.title;
  
      const movieOverview = document.createElement('p');
      movieOverview.textContent = data.overview;
  
      const movieReleaseDate = document.createElement('p');
      movieReleaseDate.textContent = `Release Date: ${data.release_date}`;
  
      const moviePoster = document.createElement('img');
      moviePoster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      moviePoster.alt = data.title;
  
      html.appendChild(movieTitle);
      html.appendChild(movieOverview);
      html.appendChild(movieReleaseDate);
      html.appendChild(moviePoster);
    });
  
    return html;
  };
   */