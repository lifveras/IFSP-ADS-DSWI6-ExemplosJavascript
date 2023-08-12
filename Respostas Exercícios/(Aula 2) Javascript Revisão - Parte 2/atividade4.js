function extractCurrencyValue(value) {
    let idx = value.indexOf("$");
    let result = value.slice(-1*((value.length - 1) - idx));  
    return eval(result);  
}

console.log(extractCurrencyValue('$120') === 120)
