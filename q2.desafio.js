function exponenciacao(number1, number2){

    let result =1;
    for (let i = 1; i <= number2; i++ ){
        result = result * number1;
    }
    return result;
}