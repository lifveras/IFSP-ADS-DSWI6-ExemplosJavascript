function getMyPublicIp(url, callback) { //Note o argumento que recebe o callback
    //Faz uma requisição HTTP para uma API em backend que retorna sua versão
    let request = new XMLHttpRequest(); //Objeto que faz a requisão HTTP (AJAX)
    request.open("GET", url); //método de acesso ao servidor da URL
    request.send();

    // Registra um callback que será invocado quando a resposta do servidor chegar
    request.onload = function () {
        if (request.status === 200) {
            // Se o status HTTP for OK, pega a resposta com o número do IP e invoca a callback
            let currentIp = JSON.parse(request.responseText).ip;
            callback(currentIp);
        } else {
            //Senão, reporta o erro
            console.error(response.statusText);
        }
    };

    // Registra outro callback que será invocado 
    // no caso de erro de rede ou timeout
    request.onerror = request.ontimeout = function (e) {
        console.log(e.type);
    };
}

// Callback que será utilizado dentro da função AJAX 
// (que usa XMLHttpRequest)
function displayUserIp(ip){
    const myIpInfo = document.createElement("h1");
    myIpInfo.innerHTML = "My IP: " + ip;
    document.querySelector("div").appendChild(myIpInfo);
}

// Callback do evento "click", que irá iniciar
// a requisição ao servidor que retorna o IP
function execNetworkOperation(event){
    getMyPublicIp(url, displayUserIp);
}

let url = "http://ip.jsontest.com/"

//Recupera o botão do DOM e configura o callback para o evento "click"
let button = document.querySelector("#req_btn");
button.addEventListener("click", execNetworkOperation);
