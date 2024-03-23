import './App.css';
//import movieData from './Data/movieData.js'
import MovieList from './MovieList.js';
import MovieDetails from './MovieDetails.js'
import { fetchAllMoviesData, fetchMovieDetails } from './apiCalls.js';
import React, { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [error, setError] = useState(null) //maybe not null?
  const [isLoading, setIsLoading] = useState(false)
  const backButton = () => setSelectedMovie(null)
  console.log('35354353534', movies)

  useEffect(() => {
    setIsLoading(true)
    fetchAllMoviesData()
      .then(data => 
        setMovies(data),
        // console.log(data),
        setIsLoading(false)
      )
      .catch(error => 
        setError(error),
        setIsLoading(false))
  }, []);

  const selectMovie = (movieId) => {
    const movie = movies.movies.find((movie) => movie.id === movieId);
    setSelectedMovie(movie);
    fetchMovieDetails(movieId)
      .then(data => setSelectedMovie(data))
      .catch(error => setError(error))
  }

  return (
    <main className="App">
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <section>
        <div>Headliner</div>
      </section>
      <section>
        <div>Organized Movies Carousel</div>
        {/* <MovieList movies={movies} selectMovie = {selectMovie}/> */}
      </section>

      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBackClick={backButton} />
      ) : (<MovieList movies={movies} selectMovie={selectMovie} />
      )}
    </main>
  )
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


export default App;
