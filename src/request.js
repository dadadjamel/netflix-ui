const APIKEY = ""

const requests = {
    fetchTrending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginal : `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetcActionMovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetcComedyMovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetcHorrorMovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetcRomanceMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetcDocumentMovies : `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests