const leitorArquivo = require("./deumasovez_modulo");
const path = require("node:path")

const fileName = path.resolve(__dirname, "huge_file.txt"); // Necessário para encontrar o diretório o arquivo está

console.log(leitorArquivo(fileName));
