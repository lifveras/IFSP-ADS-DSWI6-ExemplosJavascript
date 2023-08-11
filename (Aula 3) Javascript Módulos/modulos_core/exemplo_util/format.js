const util = require('util');

// format funciona como printf no C, PHP, etc.
// As especificações de tipos de string são: 
/**
    %s: String 
    %d: Number
    %i: Valores true para parseInt(value, 10) 
    %f: Valores true para parseFloat(value)
    %j: JSON.
    %o: Object
    %O: Object. 
    %%: single percent sign ('%'). This does not consume an argument.
 */
const output1 = util.format('Hello %s!', 'World');
console.log(output1);
const output2 = util.format('Number %d', 100);
console.log(output2);
const output3 = util.format('Float: %f', 10.25);
console.log(output3);
const output4 = util.format(' %o!', {nome: "Carlos", idade: 25});
console.log(output4);