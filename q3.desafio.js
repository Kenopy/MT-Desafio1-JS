function basket(string){
    let record;
    let newRecord;
    
    const list = string.split(" ");

    for (let i = 1; i <= list.length; i++){
        if (i == 1){
            record = array[i];
            newRecord = record;
            console.log("Valor inicial, novo record é: "+newRecord+", porém não entrará na contagem");
        }else if(i > 1 && list[i] > newRecord){
            newRecord += 1;
            console.log("O novo record é: "+newRecord);
        }
    }

    return "A quantidade de vezes que seu recorde foi quebrado é igual a: "+newRecord;
}