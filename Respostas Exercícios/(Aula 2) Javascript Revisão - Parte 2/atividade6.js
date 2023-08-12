function camelize(str){
    let strParts = str.split("-");
    let camelizedStr = strParts[0];
    for(let str of strParts.slice(1))
        camelizedStr = camelizedStr + str.charAt(0).toUpperCase() + str.slice(1);
    return camelizedStr;    
}

console.log(camelize("background-color")=="backgroundColor");
console.log(camelize("list-style-image")=="listStyleImage");
console.log(camelize("-webkit-transition")=="WebkitTransition");
