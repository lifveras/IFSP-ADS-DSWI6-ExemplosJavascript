class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) { return this.from <= x && x <= this.to; }

    *iterator() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString() { return `(${this.from}...${this.to})`; }
}

//Agora possa criar um objeto da classe com new
let r = new Range(1,3);
console.log(r.includes(2)); //retorna true
console.log(r.toString()); // Saída -> (1...3)
// iterador
for(const item of r.iterator()){ 
    console.log(item);
}

console.log(typeof r) // Saída: object
console.log(typeof Range) // Saída: function
console.log(r instanceof Range) // Saída: true

class Span extends Range{
    constructor(start, span){
        let from, to;
        if (span >= 0) [from, to] = [start, start + span];
        else [to, from] = [start, start + span]
        super(from, to); //uso do super para a superclasse
    }
    //sobrescrita de método
    toString() {
        return `(${this.from}... +${this.to - this.from})`;
    }
}

let s = new Span(10, -4);

console.log(s.toString());

for(let x of s.iterator()){
    console.log(x);
}
