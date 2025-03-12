function groupById(data){
    if(data instanceof Array){
        return data.reduce(
            (valorAnterior, itemAnteriorLista) => {
                valorAnterior[itemAnteriorLista.id] = itemAnteriorLista;
                return valorAnterior;
            }, 
            {} // O valor inicial é um objeto, pois é sobre ele que o objeto com ids como chaves será construído
        );
    } 
    return null;
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'peter', name: "Peter Peterson", age: 31},
]

let usersById = groupById(users);
console.log(usersById);
