const fs = require("fs");
const { stdout } = require("node:process");

const path = require("node:path")

const fileName = path.resolve(__dirname, "huge_file.txt"); // Necessário para encontrar o diretório o arquivo está

let init, end;

function printFile(filename, encoding="utf8") {
    let stream = fs.createReadStream(filename, encoding);
    stream.on("end", () =>{
        console.log("Finalizado!");
        end = Date.now();
        console.log(`Tempo de execução: ${end-init} ms`);
    })
    // pipe() gerencia a leitura do arquivo e sua escrita na saída padrão (stdout)
    // stream.once(process.stdout);
    stream.pipe(process.stdout);
}

init = Date.now();
printFile(fileName);
