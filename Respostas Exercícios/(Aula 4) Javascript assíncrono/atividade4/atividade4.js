// Este código deve ser executado no navegador, que contém a função fetch.
class HttpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url){
    // Aguarda pela finalização do fetch antes de continuar
    const response = await fetch(url);
    if(response.status == 200){
        // JSON.stringfy converte o objeto javascript para texto
        return await response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser(){
    // O loop irá garantir que o prompt peergunte novamente em caso de erro
    while(true){
        try {
            let name = prompt("Entre com um nome do github (tente inserir o seu)", "iliakan");
            // Uso do await aqui
            const user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Full name: ${user.login}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404){
                alert("Usuário não encontrado, por favor, digite novamente.");
            } else
                throw error;
        }
    }
}

demoGithubUser();
