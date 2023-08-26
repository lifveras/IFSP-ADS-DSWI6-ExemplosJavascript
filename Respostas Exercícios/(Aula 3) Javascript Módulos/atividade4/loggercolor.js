const util = require('util');

const inspectOpts = {
    colors:true,
}

// Para ativar as mensagens desta função, utilizar o comando
// $ set NODE_DEBUG=INFO
function info(){
    const debugInfo = util.debuglog('INFO');
    // Segundo a documentação
    // https://nodejs.org/api/util.html#customizing-utilinspect-colors
    util.inspect.styles["string"] = "blue";
    debugInfo(
        util.inspect("Está é uma mensagem de informação", inspectOpts)
    )
}

// Para ativar as mensagens desta função, utilizar o comando
// $ set NODE_DEBUG=WARNING
function warning(){
    const debugwARNING = util.debuglog('WARNING');
    // Segundo a documentação
    // https://nodejs.org/api/util.html#customizing-utilinspect-colors
    util.inspect.styles["string"] = "yellow";
    debugwARNING(
        util.inspect("Está é uma mensagem de alerta", inspectOpts)
    )
}

// Para ativar as mensagens desta função, utilizar o comando
// $ set NODE_DEBUG=ERROR
function error(){
    const debugERROR = util.debuglog('ERROR');
    // Segundo a documentação
    // https://nodejs.org/api/util.html#customizing-utilinspect-colors
    util.inspect.styles["string"] = "red";
    debugERROR(
        util.inspect("Está é uma mensagem de erro", inspectOpts)
    )
}

module.exports = {
    info,
    warning,
    error
}