const util = require("util");

// Opções para o inspect. Veja os parâmetros em https://nodejs.org/api/util.html#utilinspectobject-options:~:text=%23-,util.inspect(object%5B%2C%20showHidden%5B%2C%20depth%5B%2C%20colors%5D%5D%5D),-%23
const inspectOpts = {
  colors: true, // Mostra o output em cores
};

// inspect retorna a string formatada
console.log(
  util.inspect("Estudando Javascript na disciplina DSW!", inspectOpts)
);

const object = {
  amit: [
    1,
    2,
    [
      [
        "alfa_romeo, spp___, sahai_harshit " + "Annapurna, chai paratha.",
        "chota",
        "bong",
      ],
    ],
    55,
  ],
  vikas: new Map([
    ["alfa", 1],
    ["romeo", "data"],
  ]),
};

// Returns the output more reader friendly.
console.log(
  "6.>",
  util.inspect(object, {
    // Se falso, cada objeto é impresso em uma linha nova
    compact: false,
    // nível de profundidade de recursão para detalhar objetos
    depth: 5,
    // tamanho de inputs para crir novas linhas
    breakLength: 80, // não afeta textos
  })
);

log(">>>> Saída do console.log");
console.log(object);
