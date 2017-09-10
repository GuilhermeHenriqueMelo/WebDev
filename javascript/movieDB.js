var movies = [];

function createMovieObject(name, stars, watched) {
    var movie = {
        title: name,
        rating: stars,
        hasWatched: watched
    };
    
    return movie;
}


// ############################## WORKFLOW ######################################


movies.push(createMovieObject("Star Wars", 5.0, true));
movies.push(createMovieObject("Hellsing Ultimate", 4.5, true));
movies.push(createMovieObject("Baby Driver", 5.0, false));


movies.forEach(function(movie) {
    if (movie.hasWatched === true) {
        console.log("You have watched " + "\"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
        console.log("You have not seen " + "\"" + movie.title + "\" - " + movie.rating + " stars");
    }
});