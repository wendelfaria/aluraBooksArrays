const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros){
    elementoComValorTotalLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
      //let disponibilidade = verificarDisponibilidadeLivro(livro)
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
         ${livro.titulo}
        </h2>
        <p class="livro__descricao">Flávio Almeida</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">Front-end</span>
        </div>
      </div>`
    })
}

// function verificarDisponibilidadeLivro(livro) {
//   if (livro.quantidade > 0){
//     return 'livro__imagens'
//   } else{
//     return 'livros__imagens indisponivel'
//   }
// }