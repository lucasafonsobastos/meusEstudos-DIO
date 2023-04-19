const filmesAPI = {};

const urlAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=9fadd1a8985b21fd600bf6f582fd5c8c&language=pt-BR&page'

filmesAPI.getFIlmes = (page = 1) => {
    return fetch(`${urlAPI}=${page}`)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((filmes) => Promise.all(filmes))
        .then((detailFilmes) => detailFilmes)
        
};


//filmes.getFIlmes();
