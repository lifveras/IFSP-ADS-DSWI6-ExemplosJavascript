//Classe: range
// Essa uma função factory que retorna um novo objeto "range"
// Essa função pode ser considerada o construtor de range
function range(from, to) {
    /*É necessário criar uma instância 
    com Object.create() para que a classe herde 
    do prototype seus métodos*/
    let r = Object.create(range.methods);

    //Armazena o inicio e o final do range
    //essas são propriedades exclusivas da nossa classe range
    r.from = from;
    r.to = to;

    //finalmente retorna uma nova instância
    return r;
}

/* Define os métodos da classe. Será passado como parâmetro 
   de Object.create() dentro da função range*/
range.methods = {
    //Retorna true se x está dentro dos limites do range.
    includes(x) {
        return this.from <= x && x <= this.to;
    },

    //Uma generator function que torna a instância dessa classe iterável
    /*Uma generator function é uma função que pode parar no meio do caminho 
    e continuar de onde parou.*/
    *iterator() {
        /* yield: pausa ou resume a generator function
            o valor em frente de yield é retornado quando um desses
            eventos acorre*/
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    toString() { return "(" + this.from + "..." + this.to + ")" }
}

let r = range(1, 3); //cria um objeto da classe range
console.log(r.includes(2)); //retorna true
console.log(r.toString()); // Saída -> (1...3)

//console.log([...r]) //uso da generator function
it = r.iterator();

// O iterador permite o uso do operador of no for
for (const item of it) {
    console.log(item);
}

console.log(typeof r) // Saída: object
console.log(r instanceof range) // Saída: false
