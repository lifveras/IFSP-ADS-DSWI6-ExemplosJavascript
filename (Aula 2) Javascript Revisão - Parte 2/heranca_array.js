// estendendo uma classe padrão do javascript
class ArrayModificado extends Array{
    #privateField = 40 // campo privado pois está definido com #
    get first(){return this[0]} // get
    get last(){return this[this.length-1]} // get
    #escondido(){console.log("Não acessível")} // método privado
}

// instância do meu array estendido
let meuArray = new ArrayModificado(1,2,3,4);
meuArray.first = 10 // Não altera nada! Não é set
//console.log(meuArray.#privateField);
console.log(meuArray.first) //Saída: 1
console.log(meuArray.last) //Saída: 4
console.log(meuArray instanceof ArrayModificado) //Saída: true
console.log(meuArray instanceof Array) //Saída: true
console.log(Array.isArray(meuArray)) //Saída: true

// Classe com métodos privados
class ClassWithPrivateMethod {
  #privateMethod () {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}
  
const instance = new ClassWithPrivateMethod()
console.log(instance.getPrivateMessage())
// expected output: "hello world"