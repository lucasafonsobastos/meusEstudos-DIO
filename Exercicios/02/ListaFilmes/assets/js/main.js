const listaFilmes = document.querySelector('[id="filmes-list"]');

const itemFilme = (item) => {
    return `
    <li class="filme-item">
        <img class="capa-filme" src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="Capa do FIlme" />
        <div class="content-filme">
            <span class="titulo-filme">${item.title}</span>
            <ol>
                <li class="categoria" >${item.genre_ids}</li>
            </ol>
        </div>
    </li>
    `
};

filmesAPI.getFIlmes().then((resposta) => {
    const novosFilmes = resposta.map(itemFilme).join('');
    listaFilmes.innerHTML = novosFilmes;
});

filmesAPI.getFilmesDetails();
