const nomes = ["ana", "bia", "andre", "pedro", "joao", "amanda"];

//console.log(nomes[1][1]); i

let nomeComA = [];

for (let indice of nomes){
    if(indice[0] === "a" || indice[0] === "A"){
        nomeComA.push(indice);
    }
}
console.log(nomeComA);