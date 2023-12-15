let cad;
let bool = true;

do{
    cad = prompt("Introduzca una cadena a cifrar: ");

    if((cad === "") || (cad === null)) {
        alert("La cadena no puede estar vacia ni ser nula.")
    } else {
        if(isNaN(cad)) {
            bool = false;
        } else {
            alert("Introduzca una cadena.");
        }
    }

}while(bool);

function encrypt(str) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "q", "m", "n", "ñ", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let cif = [];
    for(let i = 0; i < str.length; i++) {
        cif[i] = letters[Math.floor(Math.random() * (27))]
    }
    return cif.join("");
}

console.log("La cadena encriptada sería: "+encrypt(cad));
console.log("La cadena original es: "+cad);
