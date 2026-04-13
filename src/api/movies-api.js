import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
axios.defaults.baseURL = "https://api.themoviedb.org/3";


// Функція для трендових фільмів (Головна сторінка)
export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// Функція для пошуку фільмів за назвою
export const searchMovies = async (query) => {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
};

// Детальна інформація про фільм
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

// Акторський склад
export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

// Відгуки
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};