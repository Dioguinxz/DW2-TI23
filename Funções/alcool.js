function calculadoraAlcool(anoNascimento, paisReferencia, anoReferencia) {

    if (anoReferencia != undefined) {
        anoReferencia = new Date().getFullYear();
    }


    //anoReferencia = 2023;
    const idade = anoReferencia - anoNascimento;
    let podeBeber = false;

    if (paisReferencia == 'BR' && idade >= 18) {
        podeBeber = true;

    }

    if (paisReferencia == 'JP' && idade >= 19) {
        podeBeber = true;




    }






    if (paisReferencia == 'EUA' && idade >= 21) {
        podeBeber = true;
    }

    return podeBeber;
}



//console.log(calculadoraAlcool);


console.log(calculadoraAlcool(1995, 'BR', 2023));
console.log(calculadoraAlcool(1995, 'BR'));
console.log(calculadoraAlcool(2005, 'BR'));
console.log(calculadoraAlcool(2005, 'JP'));
console.log(calculadoraAlcool(2005, 'EUA'));



//Desenvolva uma função em JavaScript que recebe três argumentos: `anoNascimento`, `paisReferencia`, `anoReferencia`.
//A função deve retornar uma `boolean` que indica se a pessoa pode ou não consumir bebida alcoólica com base no país de referência.
//O argumento `anoReferencia` deve assumir um
//valor padrão que é equivalente ao ano atual que o sistema está rodando.
//Para o Brasil(`BR`) é permitido para maiores de 18 anos,
//para o Japão(`JP`) para maiores de 19 anos e para os Estados Unidos(`EUA`) para maiores de 21 anos.

//podeBeberAlcool(1995, 'BR', 2023) //true
//podeBeberAlcool(1995, 'BR') //true
//podeBeberAlcool(2005, 'BR') // true
//podeBeberAlcool(2005, 'JP') // false
//podeBeberAlcool(2005, 'EUA') // false