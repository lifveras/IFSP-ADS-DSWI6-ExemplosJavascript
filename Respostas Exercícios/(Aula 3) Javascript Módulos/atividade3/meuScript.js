// Para executar o script, executar
// $ node meuScript.js meuarquivo.txt
const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path")

const filename = path.resolve(__dirname, process.argv[2]); // Necessário para encontrar o diretório onde o arquivo está

// cria uma interface entre readline e um stream
const rl = readline.createInterface({
    input: fs.createReadStream(filename),
})

// rl gera eventos "line" para cada linha lida. O callback é invocado para cada uma delas.
rl.on('line', (line) =>{
    console.log(line);
})
