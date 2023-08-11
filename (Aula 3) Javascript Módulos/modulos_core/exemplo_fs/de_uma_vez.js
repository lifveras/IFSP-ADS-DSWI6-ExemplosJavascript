const fs = require("fs");

const printText = (text) =>{
    let lines = text.split("\n");
    lines.forEach(line => console.log(line));
}

const processFileText = (textBuffer) => {
    console.log(">>> Leitura assíncrona baseada em Promises")
    //printText(textBuffer.toString());
}

const handleReadError = (error) => console.log(error);
const fileName = "dados.csv";

 // Leitura síncrona, retorna buffer(array de bytes)
let buffer = fs.readFileSync(fileName);
console.log(">>> Leitura síncrona (Buffer)")
printText(buffer.toString());

// Leitura síncrona, retorna String
let text = fs.readFileSync(fileName, "utf8"); 
console.log(">>> Leitura síncrona (Codificado)")
printText(text);

// Leitura assíncrona baseada em Promises
fs.promises
    .readFile(fileName, "utf8")
    .then(processFileText)
    .catch(handleReadError);

// Ou use a Promise API com await dentro de uma função async
console.log(">>> Leitura com await em função async")

async function processText(filename, encoding = "utf8") {
    let text = await fs.promises.readFile(filename, encoding);
    printText(text);
}

processText(fileName);
