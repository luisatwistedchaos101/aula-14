// Desafio 4: Iterando sobre as Propriedades
// Descrição: Crie uma função que receba um objeto como parâmetro e itere sobre suas propriedades,
// exibindo cada chave e valor no console.
// Use o objeto carro como argumento para testar a função.
const carro = {
    marca: "Volkswagen",
    modelo: "Fusca",
    ano: 1970,
descrever: function(){
    console.log(
    `Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano} na cor ${this.cor}.`);
    },
}
carro.ano = 2023;
carro.cor = "azul";


function iterar(obj) {
    for (let chave in obj) {
        console.log(chave, obj[chave])
}
}

iterar(carro);