var express = require('express');

var app = express();

app.get("/", (req, res) =>{
    const query = req.query;
    if(query.saudacao === "ola"){
        res.status(200).json({saudacao: "Olá, tudo bem!"});
    }else{
        res.status(500).json({error: true, message: "Saudação errada"});
    }
})

app.get("/api/user/:userId", (req, res) =>{
    const {userId} = req.params;
    if(userId == 10){
        res.status(200).json({id: userId, user: "my_user"});
    }else{
        res.status(500).json({error: true, message: `usuário não encontrado para o id ${userId}`});
    }
})

app.listen(8080, () =>{
    console.log("Server listening in port 8080");
})