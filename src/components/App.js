import React from 'react';
import MovieCard from './MovieCard'
import {connect} from 'react-redux'

const API_KEY = 'cb02f59c';
const searchRequest = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const App = (props) => {

     const searchMovie = () => {
         console.log(this.movInput.value)
         props.onSearchMovie(this.movInput.value)
         this.movInput.value = ''
     }

      let {movie} = props
      return (
          <div>
              <header>
                  <h1>Kinoman</h1>
                  <div className='search'>
                      <input type="text" placeholder='Search...' ref={(input) => {this.movInput = input}}/>
                      <button type="submit" onClick={searchMovie}><i className="fas fa-search"/></button>
                  </div>
              </header>
              <div>
                  {
                   movie.map((mov, i) =>
                       <MovieCard key={i} movie={mov}/>
                  )}
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
        }
    })
)(App);