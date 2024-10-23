import { getMovies } from '../modules/mockdata.js';

import { generateMovies, filterMovieByGenre, getNames} from "../modules/ui.js"; 
let movies = [];

document.addEventListener("DOMContentLoaded", async() => {
movies = await getMovies();
await generateMovies(movies);
filterMovieByGenre(movies); 
getNames(movies);
console.log(getNames);
});



// import { filterMovieByGenre } from '../modules/data.js';
// let genres = [];
// document.addEventListener("DOMContentLoaded", async() => {
// genres = await filterMovieByGenre();
// console.log(genres);

// await filterMovieByGenre(gen)
// });




// import {
//     getMoviesWithImages
   
//   } from "../modules/data.js";
  

// document.addEventListener("DOMContentLoaded", async () => {
   
//     movies = await getMoviesWithImages();
//     await getMovies(movies);

//   });


// document.getElementById("meterBar").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "hello";
// });

// document.getElementById("myButton").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World!";
// });


// document.getElementById("ImageButtonOne").addEventListener("click", function() {
    
//     var img = document.getElementById("myImage");


//     img.src = "The Incredible Hulk (2008).jpeg"; 


//     img.style.display = "block";

// });

// document.getElementById("ImageButtonTwo").addEventListener("click", function() {
    
//     var img = document.getElementById("myImage");


//     img.src = "The Avengers (2012).jpeg"; 


//     img.style.display = "block";
   
    
// });


