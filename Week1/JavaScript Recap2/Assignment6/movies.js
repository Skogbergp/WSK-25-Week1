var movies = [];

var input = prompt('Enter the number of movies you want to add: ');

for (var i = 0; i < input; i++) {
  var movieName = prompt('Enter the movie name: ');
  var rating = parseFloat(prompt('Enter the movie rating: '));

  var movie = {
    name: movieName,
    rating: rating,
  };
  movies.push(movie);
}

movies.sort(function (a, b) {
  return b.rating - a.rating;
});

const sortedMovies = document.createElement('p');
document.body.appendChild(sortedMovies);
sortedMovies.innerHTML = JSON.stringify(movies);

console.log(movies);

console.log('highest rated movie: ' + movies[0].name);

const highestRatedMovie = document.createElement('p');
document.body.appendChild(highestRatedMovie);
highestRatedMovie.innerHTML =
  'highest rated movie: ' +
  movies[0].name +
  ' with rating: ' +
  movies[0].rating;
