const filmesAPI = {};

const urlApiImg = 'https://image.tmdb.org/t/p/w500/';
const urlAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=9fadd1a8985b21fd600bf6f582fd5c8c&language=pt-BR&page';
const urlAPIGeners = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9fadd1a8985b21fd600bf6f582fd5c8c&language=pt-BR';

// função - converte o nosso filme segindo o model
function convertFilmes(filmeDatail){
    //console.log(filmeDatail.genres);
    const filme = new Filme();


    filme.title = filmeDatail.title;
    filme.imagem = filmeDatail.poster_path;

    for(const g of filmeDatail.genres){
        filme.generos.push(g.name);
    }
    
    filme.genero = filmeDatail.genres[0].name;


    return filme;

}

// fetch - retorna uma lista dos generos
filmesAPI.getFilmesDetails = (detailFilmes) => {
    const urlDetail = `https://api.themoviedb.org/3/movie/${detailFilmes.id}?api_key=9fadd1a8985b21fd600bf6f582fd5c8c&language=pt-BR`
    return fetch(urlDetail)
        .then((response) => response.json())
        .then(convertFilmes)
}

// fetch - traz da minha API os filmes 
filmesAPI.getFIlmes = (page = 1) => {
    return fetch(`${urlAPI}=${page}`)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((results) => results.map(filmesAPI.getFilmesDetails))
        .then((filmes) => Promise.all(filmes))
        .then((detailFilmes) => detailFilmes) // essa resposta eu passo para a main.js mostar os itens na tela 
        
};


//filmes.getFIlmes();
