/*
Condicionais - if - else
Menores de 18 -> menor idade
Entre 18 e 60 -> Adultos
Maiores de 60 anos -> Idosos
*/

const idade = 15;

if (idade < 18){
    console.log("Menor de idade");
} else if (idade <= 60){
    console.log("Pessoa Adulta");
} else {
    console.log("Pessoa Idosa");
}