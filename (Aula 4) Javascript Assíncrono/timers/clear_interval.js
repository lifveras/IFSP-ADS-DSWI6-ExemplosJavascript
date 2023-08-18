let intervalControl;
// Irá controlar as repetições do setInterval
let count = 1;

const callback = () => {
    console.log("Saída: " + count);
    // Conta até 3
    if(count == 3){
        //interrompe a execução do setInterval()
       clearInterval(timer); 
    }
    count++;
};

const tempoMilisegundos = 1000;
timer = setInterval(callback, tempoMilisegundos); //chama periodicamente