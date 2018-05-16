import React from 'react';
import MovieCard from './MovieCard'
import {connect} from 'react-redux'

const API_KEY = 'cb02f59c';
const searchRequest = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const App = (props) => {
     let {movie} = props

     const searchMovie = () => {
         props.onSearchMovie(this.movInput.value.replace(/ /gi, '+'))
         this.movInput.value = ''
     }

      return (
          <div className='container'>
            <div>
                <nav className='sticks'>
                    <button onClick={props.getMarvel}><img src="/img/marvel.png"/></button>
                    <button onClick={props.getStarWars}><img src="/img/star-wars.png"/></button>
                    <button onClick={props.getMarvelDisney}><img src="/img/marvel-disney.png"/></button>
                    <button onClick={props.getDC}><img src="/img/dc.png"/></button>
                    <button onClick={props.getMarvelFox}><img src="/img/marvel-fox.png"/></button>
                    <button onClick={props.getRingLord}><img src="/img/ring-lord.png"/></button>
                </nav>
            </div>
            <div className='finder'>
                <header>
                    <h1>GeekMovies</h1>
                    <div className='search'>
                        <input placeholder='Search...' ref={(input) => {this.movInput = input}}/>
                        <button onClick={searchMovie}><i className="fas fa-search"/></button>
                    </div>
                </header>
                <div className='results'>
                    {
                        movie.map((mov, i) =>
                            <MovieCard key={i} movie={mov}/>
                        )}
                </div>
            </div>
          </div>
      );

}

export default connect(
    store => ({
        movie: store
    }),
    dispatch => ({
        onSearchMovie: (req) => {
            fetch(searchRequest+req)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    dispatch({type: 'SEARCH_MOVIE', payload: data})
                })
            },
        getMarvel: () => {
            dispatch({type: 'PLAYLIST_MARVEL'})
        },
        getStarWars: () => {
            dispatch({type: 'PLAYLIST_STAR_WARS'})
        },
        getMarvelDisney: () => {
            dispatch({type: 'PLAYLIST_MARVEL_DISNEY'})
        },
        getDC: () => {
            dispatch({type: 'PLAYLIST_DC'})
        },
        getMarvelFox: () => {
            dispatch({type: 'PLAYLIST_MARVEL_FOX'})
        },
        getRingLord: () => {
            dispatch({type: 'PLAYLIST_RING_LORD'})
        }
    })
)(App);