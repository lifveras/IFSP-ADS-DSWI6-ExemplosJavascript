function makeWorker(){
    // VARIAVÉIS DE MESMO NOME
    let name = "Pete"; // Experimente comentar esta declaração e executar novamente

    // Ela buscará primeiro a variável 
    // do escopo do qual foi definida.
    return function(){
        console.log(name);
    }
}

// VARIAVÉIS DE MESMO NOME
let name = "John";

// create a function
let work = makeWorker();

// O que irá mostrar?
work();  // Irá mostrar Pete