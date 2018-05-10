import React, { Component } from 'react';
import Finder from './Finder'

class App extends Component {
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
                  <Finder/>
              </div>
          </div>
      );
  }
}

export default App;
