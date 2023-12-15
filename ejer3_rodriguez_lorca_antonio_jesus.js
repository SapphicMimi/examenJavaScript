let usuario = {
    nombre: "Adelfolso",
    edad: "34",
    calle: "C/Buenavista, Nº14",
    número: "635239543",
    provincia: "Ávila",
    profesión: "Ferretero",
    sueldo: "1750",
    mudarse() {
        let street = prompt("Su nueva calle es: ");
        let provin = prompt("Ahora su nueva provincia es: ");

        if(street == "" || provin == "" || street == null || provin == null) {
            return false;
        }

        for(let user in this) {
            if(user == "calle") {
                this[user] = street; 
            }
            if(user == "provincia") {
                this[user] = provin; 
            }
        }
    },

    cambiarTrabajo() {
        let job = prompt("Su nuevo trabajo es: ");
        let income = prompt("Ahora su nuevo sueldo es: ");

        if(job == "" || income == "" || job == null || income == null) {
            return false;
        }

        for(let user in this) {
            if(user == "sueldo") {
                this[user] = income; 
            }
            if(user == "profesión") {
                this[user] = job; 
            }
        }
    }
}

// usuario.mudarse();
// usuario.cambiarTrabajo();

console.log(usuario);

let usuario2 = Object.assign({}, usuario);

usuario2.mudarse();
usuario2.cambiarTrabajo();

usuario2.nombre = "Jordi";
usuario2.edad = "19";
usuario2.telefono = "614279341";

console.log(usuario2);