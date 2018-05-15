import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>
            <img src={movie.Poster}/>
            <h3>{movie.Year}</h3>
            <h2>{movie.Title}</h2>
        </div>
    );
}

export default MovieCard;
