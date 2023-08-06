// ´objeto´ é um array-like pois contém o campo length e as keys 
// como números inteiros
let objeto = { "0":"foo", "1":"bar", "2":"baz", length:3 };
let array = Array.from(objeto);
console.log(array); // ['foo', 'bar', 'baz']

let a = [1,2,3];
console.log(a); 
delete a[2]; // a agora não tem mais um element no indice 2
console.log(2 in a); 
console.log(a); 

let numeros = ["1, 2, 3, 4"];
const f = function(item){
    console.log(item);
}
numeros.forEach(f);

let a2 = [20, 30, 40]
// aplica a operação x^2 a cada um dos itens do array
console.log(a2.map(x => x*x));
console.log(a2)

// imprime cada um dos valores do array e sua lista
a2.forEach((item,indice) => console.log(item, indice));

// filtra os elementos com indice positivo - a[0] = 1
console.log(a.filter((item, indice) =>  indice%2 === 0))
