// ===>>> OPERADORES E EXPRESSÕES <<<====

// >>> Acessando propriedades de objetos
let o = {
    x: 1, 
    y: {
        z: 3
    }
}; 

// acessar o campo 'x' de 'o'
console.log(o.x);
// acessar o campo 'z' de 'y' de 'o'
console.log(o.y.z);
// acessar o valor do campo "x"  
console.log(o["x"]);

// >>> Acessando elementos de array 
let a = [o, 4, [5, 6]];
// imprime o objeto 'o'
console.log(a[0].y.z);
// acessa o valor 4
console.log(a[1]);
// acessa a lista interna
console.log(a[2][0]);

// >>> descobrindo qual é o tipo de um valor
let func = function(){ return 10};
console.log(typeof func); // function
console.log(typeof 10); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// >>> Exemplo com valor Truthy
let pessoa = {"nome": "Cássio", "idade": 20 };
// pessoa != null não é necessário
if(pessoa){ //O objeto é um valor Truthy
 console.log(pessoa); // Vai imprimir a pessoa
} else {
    console.log("Não foi possível imprimir");
}

// >>> Diferença operadores == e ===
let num = "10";
// existe uma comparação entre 
// valores iguais mas tipos diferentes
// (int e string) 
if(num === 10){
    console.log("O num é: " + num);
} else{
    console.log("tipos de dados diferentes");
}

// >>> Atribuição via desestruturação
let lista = [10, 20, 30];
let [x, y, z] = lista;

console.log(x + " / "+ y + " / "+ z);

let c = 10;
let d = 20;

[d, c] = [c, d];

console.log("valor de c: " + c);
console.log("valor de d: " + d);

// >>> Atribuição via desestruturação com objtos
const cadastro = {
    nome: "Fulano de tal",
    idade: 18,
    end: "São Miguel"
}

// não é necessário relacionar com todos os campos do objeto
let {idade: deMaior} = cadastro;

if(deMaior >= 16){
    console.log("Pode acessar");
} else {
    console.log("Não pode acessar");
}

// Outro exemplo
const point = {x: 4.0, y: 6.0};
let {x: var1, y:var2} = point;
console.log(var1, var2);

// >>> Atribuição com desestruturação com objeto
const contato1 = {
    nome: 'André', 
    num:"2222-2222"
};
const contato2 = {
    nome: 'Marcos', 
    num:"3333-3333"
};
lista = [contato1, contato2];

// for(const item of lista){
for(const {nome: key, num: value} of lista){
    console.log(`${key} -> ${value}`);
}

// >>> Atribuição com desestruturação parcial
var [primeiro, segundo, ...resto] = [1,2,3,4]
console.log(primeiro);
console.log(segundo);
console.log(resto); //[3,4]

// ===>>> TIPOS MUTÁVEIS E IMUTÁVEIS <<<====
let s = "hello"; // inicia texto com letra minusculas
let S = s.toUpperCase(); // Retorna "HELLO", mas não altera o conteúdo de s
console.log(S);
console.log(s); // => "hello": a string original não é alterada
let num1 = 10;
let num2 = num1; //Copia o valor de num1 para num2
num2 = 5; //Altera o valor de num2 para 5
console.log(num1); //Retorna o valor 10 inalterado em num1

let obj = { x: 1 }; // Inicializa com um objeto
obj.x = 2; // Muda ele mudando o valor de sua propriedade x
obj.y = 3; // Muda ele adicionando uma nova propriedade y


let arr1 = [1,2,3]; // Array também é mutável
let arr2 = arr1;
arr2[0] = 0; // Altera o valor de elemento de vetor
arr2[3] = 4; // Adiciona um novo elemento ao vetor
console.log(arr1); //Saída: [0, 2, 3, 4]. A lista a foi alterado pela lista b


// ===>>> OPERADORES E EXPRESSÕES <<<====
let novaPessoa = {
    nome: "Fulano",
    idade: 100
}
// função que será passada para dentro de outra como argumento
function printprops(o) {
    for(let p in o) { //retorna as propriedades do objeto
        // p = nome
        // o[p] = Fulano
        console.log(`${p}: ${o[p]}\n`);
    }
}
// recebe uma função como argumento e a executa
function execute(func, o){
    func(o);
}
// detalhe: para passar uma função para dentro de outra, 
// não invocar a função utilizando o operador ()
execute(printprops, novaPessoa);

// >>> Função sendo passada para dentro uma função da biblioteca 
// >>> padrão do Javascript
let lista1 = [3,2,1];
lista1.sort(function(a,b) { return a-b; });
console.log(lista1);

// >>> Função invocada imediatamente após a sua definição
const valor = 25;
// envolver a função entre parênteses
// para chamá-la imediatamente
(
    // essa função não tem nome,
    // pois será executada imediatamente
    function(x) {
        console.log(x*x);
    }
)(valor); // (valor) executa a função

// >>> Arrow Function
const constantFunc = () => 42;
// A função acima é o mesmo que
// const constantFunc = function() { return 42 };
// function constantFunc() { 
//     return 42 
// };

// Exemplo com parâmetros
const constantFuncParam = (a,b) => a + b;
// Se a função acima tiver mais de uma insturção, deve
// ser definida como segue
const constantFuncParamManyInstruct = (a,b) => {
    const soma = a + b;
    return  soma;
};

