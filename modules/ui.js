// import { getUniqueMovieTypes } from "./data.js";
import { hasGenre } from "./data.js";
import {renderStars} from "./data.js"
export async function generateMovies(movies){
     const container = document.querySelector(".review-container");
     container.innerHTML ="";

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


export function filterMovieByGenre(movies) {
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



