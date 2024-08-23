// Desafio 3: Função Dentro de um Objeto

// Descrição: Adicione uma função chamada descrever dentro do objeto carro que
// retorne uma string descrevendo o carro, por exemplo,
// "Este carro é um [marca] [modelo] do ano [ano] na cor [cor].".
// Chame essa função e exiba o resultado no console.

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
carro.descrever();