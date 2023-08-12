// Este será executado, pois -1 é Truthy
if(-1 || 0) console.log('first');
// Este NÂO será executado, pois 0 é Falsy
if(-1 && 0) console.log('second');
// Este será executado, pois -1 && e 1 dá verdadeiro
if(null || -1 && 1) console.log('third');