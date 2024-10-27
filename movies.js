//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Movie data link: https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json


import * as movieHelper from './helpers.js';

export const findMoviesByDirector = async (directorName) => {
  
  if (!directorName) {
    throw new Error("Director name is Unavailable");
  }

  if( typeof directorName !== 'string'){
    throw new Error("Director name is Invalid");
  }
  
  if (directorName.trim().length === 0) {
    throw new Error("Input is Invalid");
  }

  directorName = directorName.trim();
  
  const movies = await movieHelper.getMovies();
  
  const Dir = movies.filter(movie => movie.director.toLowerCase() === directorName.toLowerCase());

  if (Dir.length === 0) {
    throw new Error("No movies");
  }

  return Dir;
};


export const findMoviesByCastMember = async (castMemberName) => {
  
  if (!castMemberName) {
    throw new Error("Invalid cast member name");
  }

  if(typeof castMemberName !== 'string'){
    throw new Error("Invalid Input");
  }

  if (castMemberName.trim().length === 0) {
    throw new Error("Empty");
  }

  castMemberName = castMemberName.trim();

  const movies = await movieHelper.getMovies();
  
  const cast = movies.filter(movie => {

    const cast = movie.cast.map(castMember => castMember.toLowerCase());

    return cast.includes(castMemberName.toLowerCase());
  });
  
  if (cast.length === 0) {
    throw new Error("No movies");
  }

  return cast.map(movie => {
    return { ...movie, cast: movie.cast };
  });
};


export const getOverallRating = async (title) => {
  
  if (!title) {
      throw new Error("wrong title");
  }

  if(typeof title !== "string"){
      throw new Error("Invalid Input");
  }

  if (title.trim().length === 0) {
      throw new Error("Empty string");
  }

  title = title.trim();

  const movies = await movieHelper.getMovies();

  const movieTitle = movies.find(movieTitle => movieTitle.title.toLowerCase() === title.toLowerCase());

  if (!movieTitle) {
      throw new Error("No Movie");
  }

  
  const ratings = movieTitle.reviews.map(review => review.rating);
  const tempRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
  const final = Math.floor(tempRating * 10) / 10;

  return final;
};


export const getMovieById = async (id) => {

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
      const movies = await movieHelper.getMovies();
    
      const movie = movies.find(movie => movie.id === id);

    if (!movie) {
      throw new Error("No Movie");
    }
       return movie;
 };
