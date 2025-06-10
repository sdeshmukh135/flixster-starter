
// get specific movie data for the movie cards
const parseMovieData = (data) => {
    const movieData = []
    const movies = data.results;

    for (const movie of movies) {
        const m = {
            "title":movie.original_title,
            "poster":movie.poster_path,
            "rating":movie.vote_average.toFixed(2)
        }

        movieData.push(m);
    }

    return movieData;
}

// search bar functionality
const handleSearch = (event) => {
    event.preventDefault();
    
}

export {parseMovieData}