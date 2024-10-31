// src/api.js
const API_KEY = 'bcd13519';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchTopRatedMovies = async () => {
    const response = await fetch(`${BASE_URL}&s=top&type=movie`);
    const data = await response.json();
    return data.Search || [];
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}&s=${query}&type=movie`);
    const data = await response.json();
    return data.Search || [];
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}&i=${id}`);
    const data = await response.json();
    return data;
};
