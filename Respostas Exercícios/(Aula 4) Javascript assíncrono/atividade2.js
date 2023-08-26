function delay(ms){
    function promiseFunc(resolve, reject){
        console.log("Task da promessa iniciada!");
        setTimeout(() =>{
            // A promessa só será resolvida após 3s
            resolve(); // Resolve irá chamar o callback do then
        }, ms);
    }

    // Cria uma Promise com o
    return new Promise(promiseFunc);
}

// alert() foi trocado por console.log() aqui
delay(3000).then(() => console.log('Executa depois de 3 segundos'));
