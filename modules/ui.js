// import { getUniqueMovieTypes } from "./data.js";
import { hasGenre, hasName } from "./data.js";
import { renderStars, howDoesPoppeFeel, movieHasReview, totalMovieReviews, seriesHasReview, totalSerieReviews, totalAverageRating } from "./data.js";

export async function generateMovies(movies){
   
    const container = document.querySelector(".review-container");    
    //const poppeContainer = document.querySelector(".poppe-container"); 
     container.innerHTML ="";  
     //poppeContainer.innerHTML = ""; 
     
       
     const averageRating = totalAverageRating(movies);
     const poppeImageSrc = howDoesPoppeFeel(averageRating);
     
     const movieReviews = totalMovieReviews(movies);
    
     const totalReviews = document.getElementById("total-movie-reviews");
     totalReviews.textContent = movieReviews;
      

     const seriesReviews = totalSerieReviews(movies);
    
     const totalSeries = document.getElementById("total-series-reviews");
     totalSeries.textContent = seriesReviews;

    

    const averageMovieRating = document.getElementById("average-rating");
    averageMovieRating.textContent = averageRating;

    
     const poppeImg = document.querySelector("#poppe-img");
 
     poppeImg.src = poppeImageSrc;
   
    
     
  
     
  
     
     for (const movie of movies) {
        const article = document.createElement("article");
        const articleData = document.createElement("div");
        articleData.classList.add("reviews");
       
        
        const stars = document.createElement("div");
        stars.innerHTML = renderStars(movie.cmdb_score);  
        stars.classList.add('stars');
      

        const genreNames = movie.genres.map(genre => genre.name);
        article.setAttribute('genres', genreNames);
        

        const title = document.createElement("h3");
        const img = document.createElement('img');       
        img.src = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`:        
        
        
        title.textContent = movie.title;
        articleData.appendChild(title);
        article.appendChild(articleData);
        container.appendChild(article);
        article.appendChild(img);        
        articleData.appendChild(stars);
    
      
       
     }
}




export function filterMovieByGenre(movies) 
{
    const genreId = document.querySelector(".rating-container")
 
   
    genreId.addEventListener("click", function(event) {
        if (event.target.tagName.toLowerCase() === 'label') {
           
            const genre = event.target.getAttribute("id"); 
           
            const filteredMovies = movies.filter(movie => {
                return hasGenre(movie, genre);
            });           

            generateMovies(filteredMovies);  
        }
    })
};


export function getNames(movies) 
{
    const nameId = document.querySelector(".rating-container")

   
    nameId.addEventListener("click", function(event) {
        if (event.target.tagName.toLowerCase() === 'label') {
           
            const name = event.target.getAttribute("name"); 
           
            const filteredMovies = movies.filter(movie => {
                return hasName(movie, name);
            });           
            
            generateMovies(movie);  
        }
        
    })
};



