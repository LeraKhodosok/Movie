export default class MovieAPI {
  _apiBase = 'https://api.themoviedb.org/3/movie/';
  _apiKey = '62ff2e54c093d4be81bbddf4bcc8f13b';

  getResource = async (param) => {
    const response = await fetch(`${this._apiBase}${param}?api_key=${this._apiKey}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${param}, recieved ${response.status}`);
    }

    return await response.json();
  }

  getPopularMovies = async () => {
    const response = await this.getResource('popular');
    return response.results;
  };

  getLatestMovie = async () =>  await this.getResource('latest');

  getPremiereMovies = async () => {
    const response = await this.getResource('upcoming');
    return response.results;
  };
}