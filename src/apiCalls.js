const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2'

// const fetchAllMoviesData = async () => {
//     return fetch(`${baseURL}/movies`)
//    .then(response => {
//     if (!response.ok) {
//         throw new Error('Failed to fetch all movies');
//     }
//     return response.json();
//    });
// }

const fetchAllMoviesData = async () => {
    const response = await fetch(`${baseURL}/movies`)
    const data = await response.json();
    return data;
}

const fetchMovieDetails = async (movieId) => {
    const response = await fetch (`${baseURL}/movies/${movieId}`)
    const data = await response.json();
    return data
}

// const fetchMovieDetails = async (movieId) => {
//     return await fetch(`${baseURL}/movies/${movieId}` )
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Failed to fetch individual movie info for movie ID:${movieId}`);
//         }
//         const singleMovie = response.json();
//         return singleMovie
//        });
//     }
       


export {
    fetchAllMoviesData,
    fetchMovieDetails,
}

 
 //const onMovieSelection = (movieId => {
   // const movieDetailsURL = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`


 //})