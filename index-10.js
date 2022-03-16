const notas = [10, 9, 7, 8];

//calcular a média aritmética das notas

let soma = 0;

for(let item of notas){
    soma = soma + item;
}
console.log(soma/notas.length);