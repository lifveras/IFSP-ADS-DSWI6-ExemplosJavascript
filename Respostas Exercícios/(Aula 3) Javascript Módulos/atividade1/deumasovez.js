const fs = require("node:fs");
const path = require("node:path")

const fileName = path.resolve(__dirname, "huge_file.txt"); // Necessário para encontrar o diretório o arquivo está

function leituraDeUmaVez(filename){
    // Leitura síncrona, retorna String “utf8”
    let text = fs.readFileSync(filename, "utf8"); 
    console.log(text);
}

// em millisegundos
const init = Date.now();
leituraDeUmaVez(fileName);
const end = Date.now();

console.log(`Tempo de execução: ${end-init} ms`);
