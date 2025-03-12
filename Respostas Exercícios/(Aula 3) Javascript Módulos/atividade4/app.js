const {
    error,
    warning,
    info
   } = require("./loggercolor");

// Necessário indicar no terminal uma das opções antes de executar o script
// $ set NODE_DEBUG=INFO
// $ set NODE_DEBUG=WARNING
// $ set NODE_DEBUG=ERROR

error();
warning();
info();