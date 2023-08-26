
function printNumbers(from, to){
    let it;
    function count(){
        console.log(from);
        if(from == to)
            clearInterval(it);
        from++;   
    }
    it = setInterval(count, 1000);
}

printNumbers(1, 5);