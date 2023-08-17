function callback(){
    console.log(count);
    count--;
    if(count < 0){
        console.log("Programa encerrado!")
        //Encerra o programa no Node.js
        process.exit();
    }
}

let count = 10;
const tempoMilisegundos = 1000;
console.log("O programa irá encerrar em ...")

//Repete o callback periodicamente
setInterval(callback, tempoMilisegundos);