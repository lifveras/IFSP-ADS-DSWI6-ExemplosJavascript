// Posso invocar resolve como método estático para criar uma
// promise já resolvida.
const p1 = Promise.resolve("Promise 1 resolvida");
console.log(p1); // Status: Fulfilled

// Proderia ser um objeto Promise, mas não precisa ser
const thenable = { 
    then(resolve, reject) {
        setTimeout(() => reject("gotcha!"), 1000);
    }
} 
//Cria uma promessa já resolvida com um thenable
const p2 = Promise.resolve(thenable); 
console.log(p2); // Status: Pending. Isso porque é necessário resolver a promessa interna
p2.catch(error => console.log(p2));