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

const imprimePessoas = function(pessoas){
    for(let p of pessoas){
        console.log(p.toString());
    }
}

// onde a exportação acontece
export {
    Pessoa,
    imprimePessoas
}
