async function getUserIp(url) {
    try{
        let response = await fetch(url);
        let userIp = await response.json();
        return userIp.ip;
    } catch (error) { // podemos capturar o erro com try-catch
        console.error(error.message);
    }
}

let url = "http://ip.jsontest.com";

getUserIp(url).then(ip => console.log(ip));
