const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info){
    console.log(`${info}: ${message}`);
}

//Exportanto como objeto
module.exports = {
    log: log,
    error: error,
    warning: warning,
    info:info,
}