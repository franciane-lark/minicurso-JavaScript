/*
Condicionais - if - else
Menores de 18 -> menor idade (meia)
Entre 18 e 60 -> Adultos (meia apenas carteirinha)
Maiores de 60 anos -> Idosos (meia)
*/

/*
INTEIRA - ADULTA E NÃO TEM CARTEIRINHA
MEIA - O RESTO
*/

const idade = 75;
const temCarteirinha = true;


const ehAdulta = idade >= 18 && idade <= 60;

if (ehAdulta && temCarteirinha === false){
    console.log("INTEIRA");
}else {
    console.log("MEIA");
}


