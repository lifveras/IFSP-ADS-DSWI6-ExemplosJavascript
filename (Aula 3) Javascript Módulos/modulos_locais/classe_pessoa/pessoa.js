// Define a Classe Pessoa
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    //Converte o estado do objeto desta classe para String
    toString(){
        return `Nome: ${this.nome} - Idade: ${this.idade} `
    }
}

// onde a exportação acontece
module.exports = {
    Pessoa,
    // Função que recebe uma lista de Pessoas
    imprimePessoas: function(pessoas){
        // Percorre cada elemento da lista de pessoas
        for(let p of pessoas){
            console.log(p.toString());
        }
    }
}
