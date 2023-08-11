const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info){
    console.log(`${info}: ${message}`);
}

module.exports.log = log;
module.exports.error = error;
module.exports.warning = warning;
module.exports.info = info;

//ou ainda como objeto
// module.exports = {
//     log: log,
//     error: error,
//     warning: warning,
//     info:info,
// }