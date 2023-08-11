//Path relativo
const path = require("path");
console.log(path.sep) // Pode ser "/" ou "\" dependendo do seu SO
// O módulo path fornece funções simples de parsing
let p = "src/pkg/test.js"; // Um exemplo de path
console.log(path.basename(p)) // => "test.js"
console.log(path.extname(p)) // => ".js
console.log(path.dirname(p)) // => "src/pkg"
// Windows utiliza barra para a esquerda \\. Join considera isso.
console.log(path.join("src/pkg", "app.js")) // => "src/pkg/app;ks"
console.log(path.relative(p, path.join("src/pkg", "app.js"))) // => "src/pkg"
console.log(path.basename(path.dirname(p))) // => "pkg"
console.log(path.dirname(path.dirname(p))) // => "src"
