import React from 'react'

function MovieDetails({ movie, onBackClick }) {
  
    console.log('!!movies array', movie)
    
        return (
            <div className="movie-detail">
                <button onClick={onBackClick}>Back to Movies</button>
                <h2>{movie.movie.title}</h2>
                <p>Average Rating: {movie.movie.average_rating}</p>
                <img src={movie.movie.backdrop_path} alt={`${movie.movie.title} backdrop`}></img>
                <p>Release Date: {movie.movie.release_date}</p>
                <p>Overview: {movie.movie.overview}</p>
                <p>Genres: {movie.movie.genres}</p>
                <p>Budget: {movie.movie.budget}</p>
                <p>Revenue: {movie.movie.revenue}</p>
                <p>Runtime: {movie.movie.runtime}</p>
                <p>Tagline: {movie.movie.tagline}</p>
            </div>
        )

}

// toLocaleString("en-us", {style: "currency", currency: "USD"})

export default MovieDetails;


// {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   }