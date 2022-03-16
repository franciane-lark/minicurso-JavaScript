const notas = [10, 9, 7, 8, 5, 10];

let notasVermelhas = 0;

for (let indice of notas){
    if(indice < 7){
        notasVermelhas++;
    }
}
console.log(notasVermelhas);