function checkSpam(str){
    // Como search retorna -1 ao não encontrar valor, somando com 1 resuta 0, que é um valor Falsy
    // if (1 + str.toLowerCase().search("viagra") || 1 + str.toUpperCase().search('XXX')) 
    if (str.toLowerCase().includes("viagra") ||str.toUpperCase().includes('XXX')) 
        return true;
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));