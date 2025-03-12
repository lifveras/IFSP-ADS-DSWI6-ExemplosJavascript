// Biblioteca para ler entradas uma linha por vez
const readLine = require('node:readline'); //https://nodejs.org/api/readline.html#readline

// Abre uma comunicação com a entrada/saída padrão
var leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question, yes, no){
    // Método question recebe uma pergunta e a função 
    // que recebe a entrada de usuário
    leitor.question(
        question,
        (answer) =>{
            if(answer === 'yes') 
                yes();
            else 
                no();
                leitor.close();
        }
    )
  
}

ask(
    "Do you agree (yes/no)",
    // function(){ console.log("You agreed.");},
    () => console.log("You agreed."), // Arrow Function
    // function(){ console.log("You canceled the execution.");},
    () => console.log("You canceled the execution."), // Arrow Function
)