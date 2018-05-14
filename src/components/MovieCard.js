import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>
            <img src={movie.Poster}/>
            <div>
                <p>Название: {movie.Title}</p>
                <p>Год: {movie.Released}</p>
                <p>Production: {movie.Production}</p>
                <p>Rating: {movie.imdbRating}</p>
            </div>
        </div>
    );
}

export default MovieCard;
