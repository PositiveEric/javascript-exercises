class Video {
  constructor(name, rating) {
    this.name = name;
    this.number = parseInt(rating); //To get raiting as an integer.
    this.allUserRatings = []; //For storing user raitings
    this.user = null;
    this.allUserRatings.push(this.number); //User and Admin ratings combined
  }

  get print() {
    return this.isRented
      ? `[${this.name}]`
      : `${
          this.name
        }  ⤙⤚  Average user rating: ${this.getAverageUserRating()}, ${this.movieStatistics()}% enjoyed the movie.`;
  }

  rent(user) {
    this.user = user;
  }

  get isRented() {
    return this.user !== null;
  }

  return() {
    this.user = null;
  }

  getUserRating(userRating) {
    this.allUserRatings.push(userRating);
  }

  getAverageUserRating() {
    const x = this.allUserRatings;
    const reducer = (acc, current) => acc + current;
    const y = x.reduce(reducer) / x.length;
    return Math.floor(y, -2);
  }

  movieStatistics() {
    const likedMovies = this.allUserRatings.filter(rating => rating > 3);
    const totalRating = this.allUserRatings.length;
    const precentage = (likedMovies.length / totalRating) * 100;
    return Math.floor(precentage, -2);
  }
}

class VideoStore {
  constructor() {
    this.movies = [];
    this.userRatingChoice = [1, 2, 3, 4, 5];
  }

  addMovie(name, rating) {
    this.movies.push(new Video(name, rating));
  }

  get printContent() {
    return this.movies.map(m => m.print).join(", ");
  }

  get asChoices() {
    return this.movies
      .filter(movie => movie.isRented == false)
      .map(movie => ({ name: movie.print, value: movie }));
  }

  rentMovies(movies, user) {
    for (const movie of movies) {
      movie.rent(user);
    }
  }

  get asChoicesToReturn() {
    return this.movies
      .filter(movie => movie.isRented)
      .map(movie => ({ name: movie.print, value: movie }));
  }

  returnMovies(movie, userRating) {
    movie.return();
    movie.getUserRating(userRating);
  }

  asChoicesUserMovies(user) {
    return this.movies
      .filter(movie => movie.user === user)
      .map(movie => ({ name: movie.print, value: movie }));
  }

  asChoicesUserMovieRatings() {
    return this.userRatingChoice;
  }
}

exports.VideoStore = VideoStore;
