/*
Condicionais - if - else
Menores de 18 -> menor idade (meia)
Entre 18 e 60 -> Adultos (meia apenas carteirinha)
Maiores de 60 anos -> Idosos (meia)
*/

/*
INTEIRA - menor de idade ou idosa ou (adulta e tiver carteirinha)
MEIA - O RESTO
*/

const idade = 75;
const temCarteirinha = true;
const ehAdulta = idade >= 18 && idade <= 60;

if(idade < 18 || idade > 60 || (ehAdulta && temCarteirinha)){
    console.log("MEIA")
} else {
    console.log("INTEIRA")
}
