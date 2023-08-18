const waitToExecute = new Promise((resolve, reject) => {
  // Esse parâmetros controlam a Promise
  const duration = 1000;
  // Se o argumento for invalido, rejeita-se a Promise
  if (duration < 0) {
    reject(new Error("Time travel not yet implemented"));
  }
  // Caso contrário, a Promise é resolvida.
  // setTimeout irá invocar resolve() sem argumentos.
  // Se resolve() for outra Promise, esta aqui será resolvida para uma nova Promise
  // Se resolve() não for uma Promise, esta aqui será realizada (fullfilled).
  setTimeout(resolve, duration);
});

//Observe que callback de then não possui argumentos
waitToExecute.then(() => {
  console.log("It’s done!");
});

// Cria e retorna uma nova Promise
const promiseFunc = function (param) {
  return new Promise((resolve, reject) => {
    // Esse parâmetros controlam a Promise
    // Se ocorrer alguma falha
    if (naoSatisfazAlgumCriterio) {
      // Rejeitamos a promise
      reject(new Error("Error!!"));
      // Código não executa depois desta linha
    }
    // Invoca o callback no then, passando o param
    resolve(param);
  });
};
