let num = parseInt(prompt("Digite um número: "));

let penultimoNum = 0;
let ultimoNum = 1;
console.log("1º - " + penultimoNum);
console.log("2º - " + ultimoNum);

for(i = 3; i <= num; i++){
    somaNum = penultimoNum + ultimoNum;
    penultimoNum = ultimoNum;
    ultimoNum = somaNum;
    console.log(i + "º - " + somaNum);
}

// FEITO POR AMANDA GALVÃO