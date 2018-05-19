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

     const keyPressed = (event) => {
         if(event.keyCode === 13){
             searchMovie()
         }
     }

      return (
          <div className='container'>
            <div>
                <nav className='sticks'>
                    <button onClick={props.getMarvel} ref={(btn) => {this.marvel = btn}}><img src="img/marvel.png" alt="marvel"/></button>
                    <button onClick={props.getStarWars} ref={(btn) => {this.starWars = btn}}><img src="img/star-wars.png" alt="star wars"/></button>
                    <button onClick={props.getMarvelDisney} ref={(btn) => {this.marvelDisney = btn}}><img src="img/marvel-disney.png" alt="marvel"/></button>
                    <button onClick={props.getDC} ref={(btn) => {this.dc = btn}}><img src="img/dc.png" alt="dc"/></button>
                    <button onClick={props.getMarvelFox} ref={(btn) => {this.marvelFox = btn}}><img src="img/marvel-fox.png" alt="marvel"/></button>
                    <button onClick={props.getRingLord} ref={(btn) => {this.ringLord = btn}}><img src="img/ring-lord.png" alt="rings"/></button>
                </nav>
            </div>
            <div className='finder'>
                <header>
                    <h1>GeekMovies</h1>
                    <div className='search'>
                        <input onKeyDown={keyPressed} placeholder='Search...' ref={(input) => {this.movInput = input}}/>
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
            // const arr = document.getElementsByClassName('active');
            // arr.forEach(el => el.attributes.removeNamedItem('class'))
            // this.marvel.className = 'active'
            dispatch({type: 'PLAYLIST_MARVEL'})
        },
        getStarWars: () => {
            // this.starWars.className = 'active'
            dispatch({type: 'PLAYLIST_STAR_WARS'})
        },
        getMarvelDisney: () => {
            // this.marvelDisney.className = 'active'
            dispatch({type: 'PLAYLIST_MARVEL_DISNEY'})
        },
        getDC: () => {
            // this.dc.className = 'active'
            dispatch({type: 'PLAYLIST_DC'})
        },
        getMarvelFox: () => {
            // this.marvelFox.className = 'active'
            dispatch({type: 'PLAYLIST_MARVEL_FOX'})
        },
        getRingLord: () => {
            // this.ringLord.className = 'active'
            dispatch({type: 'PLAYLIST_RING_LORD'})
        }
    })
)(App);