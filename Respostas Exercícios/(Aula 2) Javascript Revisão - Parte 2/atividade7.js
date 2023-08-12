function groupById(data){
    if(data instanceof Array){
        return data.reduce(
            (value, item) => {
                value[item.id] = item;
                return value;
            }, 
            {}
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
