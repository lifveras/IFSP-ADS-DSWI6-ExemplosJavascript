function loop(valor, fCond, fAtualiza, fCorpo){
    while(fCond(valor)){
        fCorpo(valor);
        valor = fAtualiza(valor);
    }
}
//  valor|  fCond   |  fAtualiza  | fCorpo
loop( 3 , n => n > 0 , n => n - 1 , console.log);