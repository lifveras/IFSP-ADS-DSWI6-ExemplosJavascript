// Este código deve ser executado no navegador, que contém a função fetch.
async function loadJson(url){
    // Aguarda pela finalização do fetch antes de continuar
    const response = await fetch(url);
    if(response.status == 200){
        // JSON.stringfy converte o objeto javascript para texto
        return JSON.stringify(await response.json());
    } else {
        throw new Error(response.status);
    }
}

// const url = "https://javascript.info/no-such-user.json"; // está URL não está mais funcionando
const url = "https://jsonplaceholder.typicode.com/posts/1";
// Alertfoi passado como uma função. Ela será o callback para o erro.
loadJson(url).then(alert).catch(alert);
