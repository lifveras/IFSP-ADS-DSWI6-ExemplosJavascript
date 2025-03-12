const fs = require("node:fs");

function leituraDeUmaVez(filename){
    // Leitura síncrona, retorna String “utf8”
    let text = fs.readFileSync(filename, "utf8"); 
    return text;
}

// Exportando a função que lê um arquivo
module.exports = leituraDeUmaVez;
