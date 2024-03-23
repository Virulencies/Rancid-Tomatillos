import React from 'react'
import MovieCard from './MovieCard'
import './App.css'

function MovieList({ movies, selectMovie }) {

    const listOfMovies = movies.movie.map(movie => {
        return (
            <MovieCard
            id={movies.id}
            key={movies.id}
            poster={movies.poster_path}
            backdrop={movies.backdrop_path}
            title={movies.title}
            rating={movies.average_rating}
            release={movies.release_date}
            onSelect={() => selectMovie(movies.id)}
            />
        )
    })

    return (
        <div className='movies-container'>
            { listOfMovies }
        </div>
    )
}

// {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   }

export default MovieList;