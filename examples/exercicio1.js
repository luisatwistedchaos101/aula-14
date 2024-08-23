// Desafio 1: Criação de um Objeto

// Descrição: Crie um objeto chamado carro com as propriedades marca, modelo e ano.
// Depois, exiba no console o valor de cada propriedade.
const carro = {
    marca: "Volkswagen",
    modelo: "Fusca",
ano: 1970
}
for (let chave in carro) {
    console.log(carro[chave])

}
