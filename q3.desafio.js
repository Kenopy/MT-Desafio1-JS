function basket(string){
    //Variáveis globais
    let newRecord;
    let piorStat;
    let posicaoPiorStat = 1; //Como a primeira rodada do laço não deve implementar, então a posição 0 nunca será usada, dito isso, a primeira posição a ser checada é a posição 1.
    let qtdQuebraRecord = 0;

    //Passo I
    /* conversao de string para array*/ 
    const list = string.split(" ");
    
    //Passo II
    /* conversao de array para number */
    const listNumber = list.map(Number);

    //Passo 3 
    //Laço de Verificação
    for (let i = 0; i < listNumber.length; i++){
        //Se for a primeira rodada, A pior e melhor estatistica inicializa com o valor. E não é contabilizado um novo recorde.
        if (i == 0){
            piorStat = listNumber[i];
            newRecord = listNumber[i];

        }else if (listNumber[i] > newRecord){//Se o valor na posição da rodada atual for maior que o recorde existente, então o novo recorde receberá esse valor e a quantidade de vezes que o recorde foi quebrado aumenta 1 unidade.
            newRecord = listNumber[i];
            qtdQuebraRecord += 1;

        }else if(listNumber[i] < piorStat){//se o valor existente na posição(listNumber[i]) em questão, for menor que a pior estatistica. Então a pior estatistica será atualizada para o valor da posição atual do array (i).
            piorStat = listNumber[i];
            posicaoPiorStat = i+1;
        }
    }
    
    //Retorno do método
    return [qtdQuebraRecord, posicaoPiorStat];
}
/* 
console.log("Teste 1");
console.log(basket("10 20 20 8 25 3 0 30 1"));

console.log("Teste 2");
console.log(basket("1 2 3 4 5 6 7 8 9 10"));

console.log("Teste 3");
console.log(basket("10 20 22 5 10 6 24 30 32"));

console.log("Teste 4");
console.log(basket("22 8 21 22 23 24 21 22 25"));

console.log("Teste 5");
console.log(basket("10 20 20 8 25 3 0 30 1")); */
