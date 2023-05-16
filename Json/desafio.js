//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:

const teste1 = {
    cliente: "João",
    endereco: " Rua B, 456",
    itens: [
        {
            nomeItem: "Hamburguer" ,
            precoItem: 15
        },
        {
            nomeItem: "Batata frita" ,
            precoItem: 8
        }
    ],
    quantidade: 3
}

const pedido = {
    cliente: teste1.cliente,
    endereco: teste1.endereco,
    itens: teste1.itens,
    taxaEntrega: 5.0
  };
    
  //TODO: Percorra o array de itens do pedido e calcule o seu valor total.
  const precosPedido = pedido.itens.map( item => item.precoItem);
  let valorTotal = precosPedido.reduce((acc, curr) => acc + curr);
  valorTotal = valorTotal + pedido.taxaEntrega;
  //const mensagem = `Pedido: ${pedido.cliente}\nEndereco de entrega: ${pedido.endereco}\nTotal: R$ ${valorTotal.toFixed(2)}`
    console.log(`Pedido: ${pedido.cliente}`);
    console.log(`Endereco de entrega: ${pedido.endereco}`);
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);
  //TODO: Imprima a saída no padrão descrito neste desafio.
  
 