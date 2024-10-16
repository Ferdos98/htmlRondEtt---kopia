export async function getMoviesWithImages() {
    const movies = await getMovies(); // Hämta rätterna
    // Hämta och lägg till bilder för varje rätt
    for (const movie of movies) {
      movie.image = await getMovies();
    }
    return dishes; // Returnera rätterna med bilder
  }