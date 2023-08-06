let listaBase = [1,2,3]
let listaSemSpread = [0, listaBase, 4]
console.log(listaSemSpread, listaSemSpread.length)

// listBase é incorporado ao meio do array
let listaComSpread = [0, ...listaBase, 4]
console.log(listaComSpread, listaComSpread.length)

