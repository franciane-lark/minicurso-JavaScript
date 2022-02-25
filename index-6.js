/*
Condicionais - if - else
Menores de 18 -> menor idade (meia)
Entre 18 e 60 -> Adultos (meia apenas carteirinha)
Maiores de 60 anos -> Idosos (meia)
*/

const idade = 15;
const temCarteirinha = true;

if (idade < 18){
    console.log("MEIA")
} else if (idade <= 60){
    //adulta
    //TODO
    if (temCarteirinha){
        //adulto tem carteirinha
        console.log("MEIA")
    } else {
        console.log("INTEIRA")
    }
} else {
    //idosa
    console.log("MEIA")
}
