let num = 6;
let bool = false;

do{
    num = prompt("Introduzca el número filas que va a tener el triangulo: ");
    
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

function triangle(rows) {
    let triangle = "";
    let mid = rows - 1;
    let count = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < (rows * 2) - 1; j++) {
            if(j == (mid + count) || j == (mid - count)) {
                triangle += "*";
            } else if (i == (rows - 1)) {
                triangle += "*";
            } else {
                triangle += " ";
            }
        }
        
        triangle += "\n";
        count++;
    }

    return triangle;
}

console.log(triangle(num));