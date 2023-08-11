//necessário importar para habilitar __filename e __dirname
const os = require("os")
// Alguns paths importantes
console.log(process.cwd()) // Path absoluto para o diretório corrente.
console.log(__filename) // Path absoluto para o arquivo que contém o código atual
console.log(__dirname) // Path absoluto para o diretório que mantém __filename 
console.log(os.homedir()) 

