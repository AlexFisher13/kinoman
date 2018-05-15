import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>
            <div className='poster'>
                <img src={movie.Poster}/>
            </div>
            <h3>{movie.Year}</h3>
            <h2>{movie.Title}</h2>
        </div>
    );
}

export default MovieCard;
