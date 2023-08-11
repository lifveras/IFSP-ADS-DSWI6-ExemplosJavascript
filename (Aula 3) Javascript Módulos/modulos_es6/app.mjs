// importando o módulo de pessoas
import {Pessoa, imprimePessoas} from "./pessoa.mjs";
// import "./pessoa";

let lista = [ ]
lista.push(new Pessoa("Carol Macedo", 24));
lista.push(new Pessoa("Marco Diaz", 25));
lista.push(new Pessoa("Alexandre Nunes", 45));
lista.push(new Pessoa("Agata Aguiar", 75));

// Imprime as pessoas de uma lista
imprimePessoas(lista);
