
---

# Async Programming with Node.js (Lab 3)

## Description
This lab demonstrates async programming in Node.js by using async/await for HTTP requests with Axios. Students will implement multiple functions across three JavaScript files: `movies.js`, `users.js`, and `app.js`. Each function should include error handling and proper argument validation. JSON data is fetched dynamically from remote sources, and functions interact with user and movie data to provide specific functionalities.

## Features

- **Users Module (`users.js`)**
  - `getUserById(id)`: Returns a user object by ID.
  - `sameGenre(genre)`: Finds up to 50 users with a specified favorite genre.
  - `moviesReviewed(id)`: Lists movies a user has reviewed.
  - `referMovies(id)`: Recommends movies from a user's favorite genre that they haven’t reviewed.

- **Movies Module (`movies.js`)**
  - `findMoviesByDirector(directorName)`: Lists movies by a specified director.
  - `findMoviesByCastMember(castMemberName)`: Lists movies with a specified cast member.
  - `getOverallRating(title)`: Calculates the average rating for a specified movie.
  - `getMovieById(id)`: Returns a movie object by ID.

- **Testing (`app.js`)**
  - Implements `main()` for testing all functions with various inputs, in try/catch blocks for error handling.

## Tech Stack
- Node.js
- Axios
- Async/Await

## Setup and Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/sachindevangan/Async-Programming-with-Node.js
   ```
2. Navigate to the project directory.
   ```bash
   cd lab3-async-node
   ```
3. Install Axios and other dependencies.
   ```bash
   npm install
   ```
4. Start testing.
   ```bash
   node app.js
   ```

## Usage
- Call functions in `app.js` and test their functionality. Each function fetches JSON data dynamically using Axios, with all error handling and data validation managed within each function.

## License
This project is provided for educational purposes only.