var prom1 = new Promise((resolve, reject) => {resolve()});
var prom2 = prom1.then(()=>{console.log("prom1")});
var prom3 = prom2.then(()=>{console.log("prom2")});
var prom4 = prom3.then(()=>{console.log("prom3")});
var prom5 = prom4.then(()=>{console.log("prom4")});

// A cadeia de execuções de Promises só encerra quando não há
// mais chamadas para de then()