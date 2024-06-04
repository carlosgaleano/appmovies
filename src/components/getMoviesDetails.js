const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const fetchMovieDetails = (movieId, callback) => {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('Error al obtener los detalles de la película:', error);
      alert('Error al obtener los detalles de la película: ' + error.message);
    });
};

export { fetchMovieDetails };