import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>
            <img src={movie.Poster}/>
            <div>
                <p>{movie.Year}</p>
                <p>{movie.Title}</p>
            </div>
        </div>
    );
}

export default MovieCard;
