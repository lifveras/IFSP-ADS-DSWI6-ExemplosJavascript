const util = require('util');

// Função com async retorna promise
async function fun() {
  return 'Este é um resultado'; // Isso será passado como argumento para o callback gerado.
}

// Retorna uma função com parâmetros (erro, valor) 
const callback = util.callbackify(fun);

// Passando para uma função para uma promise convertida
callback((err, result) => {
    if (err) 
        throw err;
    console.log(result);
});