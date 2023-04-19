const filmesAPI = {};

const urlApiImg = 'https://image.tmdb.org/t/p/w500/';
const urlAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=9fadd1a8985b21fd600bf6f582fd5c8c&language=pt-BR&page';
const urlAPIGeners = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9fadd1a8985b21fd600bf6f582fd5c8c&language=pt-BR';

function convertFilmes(filmeDatail){
    const filme = new Filme();
    filme.title = filmeDatail.title;
    filme.poster_path = urlApiImg+filmeDatail.poster_path;
    filme.genre_ids = filmeDatail.genre_ids.map((genres) => genres.name)
}

filmesAPI.getFilmesDetails = () => {
    return fetch(urlAPIGeners)
        .then((response) => response.json())
        .then((jsonBody) => console.log(jsonBody))
}

filmesAPI.getFIlmes = (page = 1) => {
    return fetch(`${urlAPI}=${page}`)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((filmes) => Promise.all(filmes))
        .then((detailFilmes) => detailFilmes)
        
};


//filmes.getFIlmes();
