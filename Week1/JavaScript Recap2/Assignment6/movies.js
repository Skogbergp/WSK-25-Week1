var movies = [];

var input = prompt('Enter the number of movies you want to add: ');

for (var i = 0; i < input; i++) {
  var name = prompt('Enter the movie name: ');
  var rating = parseFloat(prompt('Enter the movie rating: '));

  var movie = {
    name: name,
    rating: rating,
  };
  movies.push(movie);
}

movies.sort(function (a, b) {
  return a.rating - b.rating;
});

const sortedMovies = document.createElement('p');
document.body.appendChild(sortedMovies);
sortedMovies.innerHTML = JSON.stringify(movies);

console.log(movies);

console.log('highest rated movie: ' + movies[movies.length - 1].name);
