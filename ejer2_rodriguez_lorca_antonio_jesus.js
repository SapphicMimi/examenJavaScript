let num;
let bool = true;

let arr = [];
let pares = [];
let impares = [];

let sumPar = 0;
let sumImpar = 0;

let maxNumPar = 0;
let minNumPar = 0;
let maxNumImpar = 0;
let minNumImpar = 0;

do{
    num = prompt("Introduzca el número limite para los números aleatorios: ");

    if((num === "") || (num === null)) {
        alert("Introduzca un número.")
    } else {
        if(!isNaN(num)) {
            bool = false;
        } else {
            alert("Introduzca un número.");
        }
    }

}while(bool);

num = Number(num);

for(let i = 0; i < 50; i++) {
    arr.push(Math.trunc(Math.random() * ((num + 1) - 1) + 1));
}

for(let num of arr) {
    if(num % 2 == 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}

for(let i = 0; i < pares.length; i++) {
    pares[i] += Math.trunc(Math.random() * ((10 + 1) - 1) + 1);
}

for(let i = 0; i < impares.length; i++) {
    impares[i] += Math.trunc(Math.random() * ((10 + 1) - 1) + 1);
}

for(let num of pares) {
    sumPar += num;
    if(num > maxNumPar) {
        maxNumPar = num;
    }
    if(minNumPar == 0) {
        minNumPar = num;
    }
    if(num < minNumPar) {
        minNumPar = num;
    }
} 

for(let num of impares) {
    sumImpar += num;
    if(num > maxNumImpar) {
        maxNumImpar = num;
    }
    if(minNumImpar == 0) {
        minNumImpar = num;
    }
    if(num < minNumImpar) {
        minNumImpar = num;
    }
}

console.log("La suma de los Números pares es: "+sumPar);
console.log("El mayor número par (despues de la suma) es: "+maxNumPar);
console.log("El menor número par (despues de la suma) es: "+minNumPar);

console.log("La suma de los Números impares es: "+sumImpar);
console.log("El mayor número impar (despues de la suma) es: "+maxNumImpar);
console.log("El menor número impar (despues de la suma) es: "+minNumImpar);