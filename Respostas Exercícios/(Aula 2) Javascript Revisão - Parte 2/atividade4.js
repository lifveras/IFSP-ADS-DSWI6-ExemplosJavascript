function extractCurrencyValue(value) {
    let result = value.split('$')[1]; // Recupera só a parte com números  
    return eval(result); // Recebe um código Javacript e executa. Se receber um número dentro de string, converte para número. 
    // return Number(result); // Passa uma string como argumento de um objeto Number também funciona. 
}

console.log(extractCurrencyValue('$120') === 120)
