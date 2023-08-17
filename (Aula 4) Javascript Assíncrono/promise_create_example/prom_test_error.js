
const valor = process.argv[2]; //parâmetro da linha de comando está a partir da 2º pos

const prom = new Promise((resolve, reject) => {
    if(valor > 10){
        reject(new Error("Maior do que 10"));
    }
    // Resolve irá passar o argumento para o
    // callback associado ao then quando ela for cumprida/resolvida
    resolve(valor);
});

const resolveOperation = (valor) => console.log("Valor da promise: " + valor);
const someError = (error) => console.error("[Error]: " + error.message);

prom.then(resolveOperation).catch(someError);
