
// get specific movie data for the movie cards
const parseMovieData = (data) => {
    const movieData = []
    //console.log(data);
    const movies = data.results;
    //console.log(movies);

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

export {parseMovieData}