import React from 'react';
import MovieCard from './MovieCard'
import {connect} from 'react-redux'

const API_KEY = 'cb02f59c';
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY;

const App = (props) => {

      let {movie} = props
      return (
          <div>
              <header>
                  <h1>Kinoman</h1>
                  <form action="">
                      <input type="text" placeholder='Поиск...'/>
                      <button type="submit"><i class="fas fa-search"></i></button>
                  </form>
              </header>
              <div>
                  {
                      movie.map((el) =>
                          <MovieCard movie={el}></MovieCard>
                      )}
              </div>
          </div>
      );

}

export default connect(
    store => ({
        movie: store
    }),
    dispatch => {}
)(App);
