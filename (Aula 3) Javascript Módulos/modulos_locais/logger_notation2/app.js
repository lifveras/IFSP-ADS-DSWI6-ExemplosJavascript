const { log,
        error,
        warning,
        info} = require("./logger");

// Não é necessária a referência ao logger
log("O código está usando módulo local", warning);