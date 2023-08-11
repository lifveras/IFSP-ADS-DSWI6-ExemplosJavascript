const util = require('util');
 
// Configuração de DEBUG para ambiente de desenvolvimento
// Use 'set NODE_DEBUG=DEV' para definir a variável de ambiente para habilitar este debug
const debugDEV = util.debuglog('DEV');
debugDEV('Valor lido: [%d]!', 100); // tipos de string funcionam aqui também

// Use 'set NODE_DEBUG=PROD' para definir a variável de ambiente para habilitar este debug
const debugPROD = util.debuglog('PROD');
debugPROD('Status: [%s]', "RUNNING");
