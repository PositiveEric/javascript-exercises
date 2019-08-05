const inquirer = require("inquirer");
const { VideoStore } = require("./videostore");
const store = new VideoStore();
store.addMovie('"The Matrix"', 4)
store.addMovie('"Godfather II"', 4)
store.addMovie('"Star Wars Episode IV: A New Hope"', 5)
store.addMovie('"American Pie II"', 2)

async function rentVideo() {
  const { choices, name } = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is your name?"
    },

    {
      name: "choices",
      type: "checkbox",
      message: "Which ones do you want?",
      choices: store.asChoices
    }
  ]);

  store.rentMovies(choices, name);
  console.log(
    `Oh, ${name}. ${choices.map(c => c.name).join(", ")} is a good choice.`
  );
  console.log("movies", store.printContent);
}

async function returnVideo() {
  const { name } = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is your name?"
    }
  ]);

  if (store.asChoicesUserMovies(name).length >= 1) {
    const { movie } = await inquirer.prompt([
      {
        name: "movie",
        type: "list",
        message: "Which one would you like to return?",
        choices: store.asChoicesUserMovies(name)
      }
    ]);
    
    // User giving rating after returning movie
    const { userRating } = await inquirer.prompt([
      {
        name: "userRating",
        type: "list",
        message: "Care to rate the movie?",
        choices: store.asChoicesUserMovieRatings(name)
      }
    ]);
    console.log(userRating)
    store.returnMovies(movie, userRating);
    
  } else {
    console.log("You don't have any movies to return. Would you like a new movie?")
    return
  } 
}

async function fillVideoStore() {
  let addMore = true;
  while (addMore) {
    const { movieName, movieRating, more } = await inquirer.prompt([
      { type: "input", name: "movieName", message: "Enter movie name" },
      { type: "input", name: "movieRating", message: "Enter movie rating" },
      { type: "confirm", name: "more", message: "Would you like to add more?" }
    ]);
    addMore = more;
    store.addMovie(movieName, movieRating);
    console.log(`Thanks, here's a list of movies: ${store.printContent}`);
    console.log(movieRating + " " + typeof movieRating)
  }
}

async function app() {
  const { user } = await inquirer.prompt([
    {
      type: "list",
      name: "user",
      message: "Welcome to our video store. Who are you?",
      choices: [
        "User",
        "Admin",
        { name: `I don't want to be here. Let me go`, value: false }
      ]
    }
  ]);
  if (user === "Admin") {
    console.log("Hello Admin. I guess you're here to fill our store.");
    await fillVideoStore();
  } else if (user === "User") {
    console.log("Hello User");
    const { intent } = await inquirer.prompt([
      {
        type: "list",
        name: "intent",
        message: "What do you want to do?",
        choices: [
          { name: "Rent a video", value: "rent" },
          { name: "Return a video", value: "return" }
        ]
      }
    ]);
    intent === "rent" ? await rentVideo() : await returnVideo();
  } else {
    return;
  }

  console.log("Okay. Thanks and Bye!");

  // Start from beginning
  app();
}

app();
