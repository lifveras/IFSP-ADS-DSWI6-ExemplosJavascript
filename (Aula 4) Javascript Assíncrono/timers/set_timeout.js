function callback(){
    console.log("Função invocada pelo setTimeout");
}

const tempoMilisegundos = 1000;
console.log("Código iniciado ...")

setTimeout(callback, tempoMilisegundos);