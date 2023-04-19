const listaFilmes = document.querySelector('[id="filmes-list"]');

const itemFilme = (item) => {
    return `
    <li class="filme-item">
        <img class="capa-filme" src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="Capa do FIlme" />
        <div class="content-filme">
            <span class="titulo-filme">${item.title}</span>
            <span class="categoria">xxx</span>
        </div>
    </li>
    `
};

filmesAPI.getFIlmes().then((resposta) => {
    const novosFilmes = resposta.map(itemFilme).join('');
    listaFilmes.innerHTML = novosFilmes;
});
