import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className='finder'>
            <div>
                <h3>Finded movies</h3>
                <p>Название: {movie.Title}</p>
                <p>Год: {movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;
