// Desafio: Manipulando Dados em JSON
// Descrição: Você recebeu uma string no formato JSON representando uma lista de alunos e suas notas.
// Seu objetivo é converter essa string em um objeto JavaScript,
// calcular a média de notas de cada aluno, e exibir o nome do aluno com a maior média.

const listaJSON = `
[
    {
"aluno" : "joao"
"notas": [
    notas: 1, 5, 6
],

    },
    
],

[
    {
"aluno" : "pedro"
"notas": [
    notas: 10, 8, 6
]

    },
    ],

[
    {
"aluno" : "ana"
"notas": [
    notas: 9, 7, 8
],

    },
    
]
`

const listaObj = JSON.parse(listaJSON);

console.log(listaObj) 