import MovieAPI from './api';

const movieAPI = new MovieAPI();

movieAPI.getPopularMovies()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })