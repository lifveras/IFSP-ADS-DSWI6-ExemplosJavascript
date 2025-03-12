// Biblioteca para ler entradas uma linha por vez
const readLine = require('node:readline'); //https://nodejs.org/api/readline.html#readline

// Abre uma comunicação com a entrada/saída padrão
var leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Quem é você?",
    (answer) => {
        if(answer === "Admin")
            leitor.question("Digite a sua senha: ",
                (answer) => {
                    if(answer === "TheMaster")
                        console.log("Welcome!");
                    else if(!answer.length)
                        console.log("Cancelado");
                    else
                        console.log("Seha errada!")
                    leitor.close(); // Necessário fechar para o programa encerrar.
                });
        else if(!answer.length){
            console.log("Cancelado");
            leitor.close(); // Necessário fechar para o programa encerrar.
        } else {
            console.log("Não te conheço");
            leitor.close(); // Necessário fechar para o programa encerrar.
        }
    }
)
