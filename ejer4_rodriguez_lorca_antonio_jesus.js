function dateFormat(date) {
    let dayOfTheWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    return dayOfTheWeek[date.getDay()]+", "+date.getDate()+" de "+(date.getMonth() + 1)+" del Año de Nuestro Señor de "+date.getFullYear();
}

let fecha = new Date();

console.log(dateFormat(fecha));