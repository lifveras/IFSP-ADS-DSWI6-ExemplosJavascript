
//Construtor da classe Range
//Note que não há tipo de retorno, apenas atribuição de parâmetros
//Note também o uso do this.
function Range(from, to){
    this.from = from;
    this.to = to;
}

/*Aqui está sendo definido um objeto do qual todos os objetos do tipo Range 
herdar. Para funcionar a propriedade prototype deve ser usada.*/
Range.prototype = {
    includes(x){
        return this.from <= x && x <= this.to;
    },

    //generator function*/
    *iterator(){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    toString() {return "(" + this.from + "..." + this.to + ")"}
}

//Agora possa criar um objeto da classe com new
let r = new Range(1,3);
console.log(r.includes(2)); //retorna true
console.log(r.toString()); // Saída -> (1...3)

// uso do iterador
let it = r.iterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// verificando o tipo do objeto
console.log(typeof r) // Saída: object
console.log(typeof Range); // Saída: Range
console.log(r instanceof Range) // Saída: true


// Herança
// Classe: Span
// Construtor da subclasse
function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}
// Faz com que Span herde atributos e métodos de Range
Span.prototype = Object.create(Range.prototype);
// Não queremos herdar o construtor de Range (Range.prototype.constructor)
// Definimos agora o de Span
Span.prototype.constructor = Span;
// Sobrescrita do método toString
Span.prototype.toString = function () {
    return `(${this.from}... +${this.to - this.from})`;
};

let s = new Span(10, -4);
console.log(s.toString());
for(let x of s.iterator()){
    console.log(x);
}