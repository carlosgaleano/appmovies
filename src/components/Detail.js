// MovieDetails.js

const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const showMovieDetails = (movieId) => {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Datos de la película:', data); // Verificar los datos recibidos
      const modal = createModal(data);
      if (modal) {
        document.body.appendChild(modal);
      }
    })
    .catch(error => {
      console.error('Error al obtener los detalles de la película:', error);
      alert('Error al obtener los detalles de la película: ' + error.message);
    });
};

const createModal = (movieData) => {
  console.log('Creando modal para:', movieData); // Verificar los datos usados para el modal

  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement('div');
  modal.classList.add('modal'); // Agrega tus estilos CSS aquí

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content'); // Agrega tus estilos CSS aquí

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button'); // Agrega tus estilos CSS aquí
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => {
    modal.remove();
  });

  const movieTitle = document.createElement('h2');
  movieTitle.textContent = movieData.title;

  const movieOverview = document.createElement('p');
  movieOverview.textContent = movieData.overview;

  modalContent.appendChild(closeButton);
  modalContent.appendChild(movieTitle);
  modalContent.appendChild(movieOverview);

  modal.appendChild(modalContent);
  
  const createModalContainer = () => {
    let modalContainer = document.getElementById('modal-container');
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'modal-container';
      document.body.appendChild(modalContainer);
    }
    return modalContainer;
  };

  //const modalContainer = document.getElementById('modal-content');
  const modalContainer = createModalContainer();
  
  if (!modalContainer) {
    console.error('No se encontró el contenedor del modal');
    alert('No se encontró el contenedor del modal');
    return null; // Evitar errores si el contenedor no existe
  }

  modalContainer.appendChild(modal);

  return modal;
};

export { showMovieDetails };
