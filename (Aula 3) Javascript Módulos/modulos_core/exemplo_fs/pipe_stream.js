const fs = require("fs");

const printText = (text) =>{
    let lines = text.split("\n");
    lines.forEach(line => console.log(line));
}

const fileName = "dados.csv";

function printFile(filename, encoding="utf8") {
    let stream = fs.createReadStream(filename, encoding);
    // pipe() gerencia a leitura do arquivo e sua escrita na saída padrão (stdout)
    stream.pipe(process.stdout); 
}

printFile(fileName);