import axios from 'axios';

class APIService {
  constructor() {
    this.API_KEY = '8978731d3453660c119868bf0fe3e32f';
    this.baseURL = 'https://api.themoviedb.org/3';
    this.imageBaseURL = 'https://image.tmdb.org/t/p';
    this.page = 1;
    this.logoSizes = ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
    this.posterSizes = [
      'w92',
      'w154',
      'w185',
      'w342',
      'w500',
      'w780',
      'original',
    ];
  }

  set setPage(page) {
    this.page = page;
  }

  makeImagePath = (path, size) => {
    if (path !== null) {
      return `${this.imageBaseURL}/${this.logoSizes[size]}${path}`;
    } else {
      return null;
    }
  };

  getData = async url => {
    try {
      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  getTrending = () =>
    this.getData(
      `${this.baseURL}/trending/movie/day?api_key=${this.API_KEY}&page=${this.page}`,
    );

  getMovieInfo = id =>
    this.getData(
      `${this.baseURL}/movie/${id}?api_key=${this.API_KEY}&append_to_response=videos`,
    );

  getSearchResult = query => {
    this.temp = `${this.baseURL}/search/movie?api_key=${this.API_KEY}&language=en-US&page=${this.page}&include_adult=true&query=${query}`;

    return this.getData(this.temp);
  };

  getTrailer = id => {
    return this.getData(
      `${this.baseURL}/movie/${id}/videos?api_key=${this.API_KEY}`,
    );
  };

  getNextPage = page => {
    return this.getData(`${this.temp}&page=${page}`);
  };
}

const apiService = new APIService();
export default apiService;
