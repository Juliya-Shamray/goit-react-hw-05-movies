import axios from 'axios';

const API_KEY = '8c4736100e6ebe86fd7f1b9a0bb25a6a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const res = await axios.get('trending/movie/day', {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

export const getMovieDetails = async id => {
  const res = await axios.get(`movie/${id}`, {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  });
  return res.data;
};

export const getCast = async id => {
  const res = await axios.get(`movie/${id}/credits`, {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  });
  return res.data.cast;
};

export const getReviews = async id => {
  const res = await axios.get(`movie/${id}/reviews`, {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

export const getMovieByQuery = async query => {
  const res = await axios.get('search/movie', {
    params: {
      language: 'en-US',
      api_key: API_KEY,
      query: `${query}`,
    },
  });
  return res.data.results;
};
