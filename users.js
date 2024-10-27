//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//User data link: https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json

import * as userHelper from './helpers.js';

export const getUserById = async (id) => {
    
  if (!id) {
      throw new Error("id is Unavailable");
  }
  if (typeof id !== "string") {
      throw new Error("id is not a string");
  }
  id = id.trim(); // Trim the input string
  if (!id) {
      throw new Error("id is empty");
  }

  const users = await userHelper.getUsers();

  const getID = users.find(getID => getID.id === id);
  if (!getID) {
      throw new Error("user not found");
  }

  return getID;
};


export const sameGenre = async (genre) => {
    if (typeof genre !== "string") {
        throw new Error("Please provide a valid genre");
      }
    
      genre = genre.trim();

    if(!genre){
      throw new Error("genre is empty");
    }

      const users = await userHelper.getUsers();
      const favGenre = users.filter(user => user.favorite_genre.toLowerCase() === genre.toLowerCase());
    
      if (favGenre.length < 2) {
        throw new Error("Less than 2 users");
      }
    
      const favGenreSort = favGenre.sort((a, b) => a.last_name.localeCompare(b.last_name));
    
      const userNames = favGenreSort.slice(0, 50).map(user => user.first_name.concat(' ', user.last_name));
    
      return userNames;
    };

export const moviesReviewed = async (id) => {

  if (!id) {
    throw new Error("id is Unavailable");
  }
  if (typeof id !== "string") {
    throw new Error("id is not a string");
  }
  id = id.trim(); 
  if (!id) {
    throw new Error("id is empty");
  }

  const users = await userHelper.getUsers();

  const getID = users.find(getID => getID.id === id);
  if (!getID) {
    throw new Error("user not found");
  }
    
      const movies = await userHelper.getMovies();
    
      const rev = movies.filter(movie => {

        const byUser = movie.reviews.find(review => review.username === getID.username);
        
        return byUser !== undefined;
      });
    
      const finalRev = rev.map(movie => {
        const review = movie.reviews.find(review => review.username === getID.username);
        return {
          [movie.title]: {
            username: getID.username,
            rating: review.rating,
            review: review.review
          }
        };
      });
    
      return finalRev;
}



export const referMovies = async (id) => {

   
  if (!id) {
    throw new Error("id is Unavailable");
  }
  if (typeof id !== "string") {
    throw new Error("id is not a string");
  }
  id = id.trim(); // Trim the input string
  if (!id) {
    throw new Error("id is empty");
  }

  const users = await userHelper.getUsers();

  const getID = users.find(getID => getID.id === id);
  if (!getID) {
    throw new Error("user not found");
  }
      
      const favoriteGenre = getID.favorite_genre;
      
      const movies = await userHelper.getMovies();
      
      const ref = movies.filter((movie) => {

        const gen = movie.genre.split("|");

        const favGen = gen.find((genre) => genre === favoriteGenre);

        if (favGen && movie.reviews.filter((review) => review.username === getID.username).length === 0) {
          return true;
        }
        return false;
      }).map((movie) => movie.title);
      
    
      return ref;
};


