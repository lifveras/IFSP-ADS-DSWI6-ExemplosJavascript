const getJson = function(url){
    //Função que executará a computação deve
    //receber os parametros resolve e reject.
    const promiseFunction = function(resolve, reject){
        var request = new XMLHttpRequest(); //Requisição AJAX
        request.open('GET', url);
        request.responseType = "text";

        request.onload = function(){
            if (request.status == 200){
                //O que for passado para resolve será repassado para o
                //callback do then();
                resolve(request.response);
            }else {
                // O que for passado passado para o reject será passado
                // para o callback do catch().
                reject(Error("Não foi possível acessar o servidor em " + URL 
                + " - Status: " + request.statusText));
            }
        }

        request.onerror = function() {
            //Outra situação de rejeição da Promise
            reject(Error('Ocorreu um erro de rede!'));
        };
        
        request.send();
    }
    //retorna um objeto Promise configurado com a definida função acima
    return new Promise(promiseFunction);
}

let url = "http://ip.jsontest.com/"

//Esse código prevê a existência de um button no HTML
document.querySelector("#req_btn").addEventListener("click", (event) => {
    getJson(url).then(
        json => {
            const h2 = document.createElement("h1");
            h2.textContent = json;
            document.querySelector("body").appendChild(h2);
        }
    )
});
