// Desafio 5: Verificando a Existência de Propriedades

// Descrição: Verifique se o objeto carro tem uma propriedade chamada preco.
// Se não tiver, adicione a propriedade com um valor de sua escolha.
// Se já existir, exiba o valor no console.

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


if (carro.preco)
    {console.log(carro.preco) `o preço deste carro é de R$95000`;
} else { 
carro.preco = 35000;

}
