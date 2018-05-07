import React, { Component } from 'react';

const API_KEY = 'cb02f59c';

class App extends Component {

  render() {
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY;

    const req = fetch(url)
        .then(response => response.json())
        .catch(err => err)

    req.then(data => {
        console.log(data)
    })

    return (
      <div>
        <header>
          <h1>Welcome to Kinoman</h1>
        </header>
        <div>
            <h3>Finded film</h3>
            <div></div>
        </div>
      </div>
    );
  }
}

export default App;
