/** Forma válida de definir uma função*/
// function square(x){
//     return x * x;
// }

// Atribuindo uma função para uma variável
const square = function(x){ return x*x};

console.log(square(10));

let vetor = [3,2,1].sort(function(a,b){ return a-b});
vetor.forEach(x => console.log(x));

const squareDez = (function(x){ return x*x}(25));
console.log(squareDez);

// Notação Arrow Function
const sum = (x, y) => {return x + y};
console.log(sum(10, 30));

const polynomial = x => x*x + 2*x + 3;
console.log(polynomial(5));
