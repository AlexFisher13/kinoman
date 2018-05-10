import React, { Component } from 'react';
import Finder from './MovieCard'
import {connect} from 'react-redux'
import axios from "axios";

const API_KEY = 'cb02f59c';
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY;

class App extends Component {

   getMovie() {
      axios.get(url)
          .then(res => {
              const movie = res.data;
              this.setState({ movie });
          })
   }

   render() {
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
                  <Finder movie={this.props.movie}/>
              </div>
          </div>
      );
  }
}


function mapStoreToProps(store) {
    return {
        movie: store
    }
}

export default connect(mapStoreToProps)(App);
