class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso / (this.altura * this.altura);
    }
}

let jose = new Pessoa('José', 70, 1.75);
console.log(jose.calculoIMC());


// class Carro {
//     marca;
//     cor;
//     combustivelKMrodado;

//     constructor (marca, cor, combustivelKMrodado) {
//        this.marca = marca;
//        this.combustivelKMrodado = combustivelKMrodado;
//        this.cor = cor;
//     };

//     custoViagem (distanciaKm, valorCombustivel){
//         let comburtivel = this.combustivelKMrodado * distanciaKm;
//         let totalRS = comburtivel * valorCombustivel;
//         console.log("o valor Gasto nessa viagem será aproximadamento: R$"+totalRS.toFixed(2));
//     };
// }

// let monza = new Carro('Fiat', 'Preto', 1/9);
// monza.custoViagem(73, 5);

