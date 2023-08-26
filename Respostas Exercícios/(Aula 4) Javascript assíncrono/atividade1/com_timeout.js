function printNumbers(from, to){
    let it;
    function count(){
        console.log(from);
        if(from == to)
            return;
        from++;
        setTimeout( count, 1000);
    }
    count();
}

printNumbers(1, 5);
