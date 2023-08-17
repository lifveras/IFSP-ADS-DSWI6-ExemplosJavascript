function waitExecute(duration) {
    // Cria e retorna uma nova Promise
    return new Promise((resolve, reject) => { // Esse parâmetros controlam a Promise
        // Se o argumento for invalido, rejeita-se a Promise
        if (duration < 0) {
            reject(new Error("Time travel not yet implemented"));
        }
        // Caso contrário, a Promise é resolvida.
        // setTimeout irá invocar resolve() sem argumentos.
        // Se resolve() for outra Promise, esta aqui será resolvida para uma nova Promise
        // Se resolve() não for uma Promise, esta aqui será realizada (fullfilled).
        setTimeout(resolve, duration);
    });
}

//Observe que callback de then não possui argumentos
waitExecute(1000).then(()=>{ console.log("It’s done!")});