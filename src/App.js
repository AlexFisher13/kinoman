import React, { Component } from 'react';
import axios from "axios";

const API_KEY = 'cb02f59c';
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY;


class App extends Component {
  constructor(props){
      super(props);
      this.state = {}
  }

    componentDidMount() {
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
                  <h1>Welcome to Kinoman</h1>
              </header>
              <div>
                  <h3>Finded film</h3>
                  <div>
                      <h3>
                          {
                              this.state.movie
                          }
                      </h3>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
