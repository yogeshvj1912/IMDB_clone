// src/components/MovieModal.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

function MovieModal() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movie)
    useEffect(() => {
        const getMovieDetails = async () => {
            const data = await fetchMovieDetails(id);
            setMovie(data);
        };
        getMovieDetails();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="modal">

            <div className='modal-image'> <img src={movie.Poster} alt={movie.Title} /></div>
            <div className='modal-detail'>
                <h2>{movie.Title}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Rating</td>
                            <td>{movie.imdbRating} / 10</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>{movie.Language}</td>
                        </tr>
                        <tr>
                            <td>Run Time</td>
                            <td>{movie.Runtime}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{movie.Year}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>{movie.Genre}</td>
                        </tr>
                        <tr>
                            <td>Plot</td>
                            <td>{movie.Plot}</td>
                        </tr>
                        <tr>
                            <td>Actors</td>
                            <td>{movie.Actors}</td>
                        </tr>
                        <tr>
                            <td>Director</td>
                            <td>{movie.Director}</td>
                        </tr>
                        <tr>
                            <td>Writer</td>
                            <td>{movie.Writer}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MovieModal;
