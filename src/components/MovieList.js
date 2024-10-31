// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopRatedMovies, searchMovies,fetchRecentMovie } from '../api';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

    useEffect(() => {
        const getMovies = async () => {
            const topRatedData = await fetchTopRatedMovies();
            setMovies(topRatedData.slice(0, 10)); // Top 10 movies

        };
        getMovies();
        
    }, []);

    const handleSearch = async () => {
        if (searchTerm) {
            const results = await searchMovies(searchTerm);
            setMovies(results);
        }
    };

    return (
        <div className='container'>
           
            <div className='search-bar'>
            <p>IMDB</p>
            <input 
                type="text" 
                placeholder="Search movies..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            </div>
            <h1 style={{color:"white",margin:"10px"}}>Top 10 Movies</h1>
            <div className='card'>
                {movies.map(movie => (
                    <div key={movie.imdbID} className='movie-card'>
                        <Link to={`/movie/${movie.imdbID}`} className='link-botton'>
                          
                            <div className='movie-image'><img src={movie.Poster} alt={movie.Title} /></div>
                          <div className='movie-detail'>
                              <h3>{movie.Title}</h3>
                              <h3>Year : {movie.Year}</h3>
                          </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
