function makeCounter(){
    let count = 0;
       
    return function(){
       return count++;
    }
}

// Elas são independentes
let counter = makeCounter();
// O count da criação dessa nova função não é o mesmo da chamada anterior
let counter2 = makeCounter();

console.log(counter()); // saída 0 
console.log(counter()); // saída 1

console.log(counter2()); // saída 0
console.log(counter2()); // saída 1