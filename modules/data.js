import { getMovies } from './mockdata.js';
const movies = getMovies();

export function hasGenre(movie, genre) {
 
  for (let i = 0; i < movie.genres.length; i++) {
 
      if (movie.genres[i].name.toLowerCase() === genre) 
      {       
        return true;
      }
  }
  return false;
}




export function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '*'; 
    } 
  }
  return stars;
}

const movieReviewCount = movieHasReview(movies); 

export function movieHasReview (movies)
{
  let genreCount = {};

  movies.forEach(movie => {

    if (movie.contribution.has_reviewed === true && movie.media_type === "Movie") {
      movie.genres.forEach(genre => {
    
        if (!genreCount[genre.name]) {
          genreCount[genre.name] = 0; 
        }        
        genreCount[genre.name]++;
      });
    }
  });
  return genreCount; 
}
console.log(movieReviewCount);


export function totalMovieReviews (movies)
{
  let movieReviewCount = 0;

  movies.forEach(movie => {

    if (movie.contribution.has_reviewed === true && movie.media_type === "Movie") 
    {
       movieReviewCount++;
    }
   
  });
  return movieReviewCount;
  
}
const totalMovieReviewCount = totalMovieReviews(movies);
console.log (totalMovieReviewCount);

const reviewCount = seriesHasReview(movies); 
export function seriesHasReview (movies)
{
  let seriesGenreCount = {};

  movies.forEach(movie => {

    if (movie.contribution.has_reviewed === true && movie.media_type === "TVSeries") {
      movie.genres.forEach(genre => {
    
        if (!seriesGenreCount[genre.name]) {
          seriesGenreCount[genre.name] = 0; 
        }        
        seriesGenreCount[genre.name]++;
      });
    }
  });
  return seriesGenreCount; 
}
console.log(reviewCount);


export function totalSerieReviews (movies)
{
  let seriesReviewCount = 0;

  movies.forEach(movie => {

    if (movie.contribution.has_reviewed === true && movie.media_type === "TVSeries") 
    {
       seriesReviewCount++;
    }
   
  });
  return seriesReviewCount;
  
}
const totalReviewCount = totalSerieReviews(movies);
console.log (totalReviewCount);

   


   
    
 
 