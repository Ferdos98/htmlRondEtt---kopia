
import { getMovies } from '../modules/mockdata.js';

import {
    getMoviesWithImages
   
  } from "../modules/data.js";
  
let movies = [];

document.addEventListener("DOMContentLoaded", async () => {
   
    movies = await getMoviesWithImages();
    await getMovies(movies);

  });


// document.getElementById("myButton1").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello Worldddd!";
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


