import React from 'react';
import MovieCard from './MovieCard'
import {connect} from 'react-redux'

//const API_KEY = 'cb02f59c';
//const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY;

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
                      <input type="text" placeholder='Поиск...' ref={(input) => {this.movInput = input}}/>
                      <button type="submit" onClick={searchMovie}><i className="fas fa-search"/></button>
                  </div>
              </header>
              <div>
                  {
                   movie.map((el, i) =>
                       <MovieCard key={i} movie={el}/>
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
        onSearchMovie: (mov) => {
            dispatch({type: 'SEARCH_MOVIE', payload: mov})
        }
    })
)(App);