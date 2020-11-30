import React from 'react'
import MoviesBox from './Containers/MoviesBox'
import './App.css';

function App() {
  return (
    <div className="App">
    <MoviesBox />
    <button>
    <a href="https:www.imdb.com/calendar/?region=gb">View More Upcoming Releases</a></button>
      
    </div>
  );
}

export default App;
