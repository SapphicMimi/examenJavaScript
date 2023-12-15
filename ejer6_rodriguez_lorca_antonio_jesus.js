class Persona {
    #nombre;
    #apellidos;
    #direccion;

    constructor(name, surname, direction) {
        this.#nombre = name;
        this.#apellidos = surname;
        this.#direccion = direction;
    }

    setNombre(name) {
        this.#nombre = name;
    }
    getNombre() {
        return this.#nombre;
    }

    setApellidos(surname) {
        this.#apellidos = surname;
    }
    getApellidos() {
        return this.#apellidos;
    }

    setDireccion(direction) {
        this.#direccion = direction;
    }
    getDireccion() {
        return this.#direccion;
    }
}

let Paco = new Persona("Paco", "Peralta", "Calle Buenavista, Nº17");

console.log(Paco.getNombre());
console.log(Paco.getApellidos());
console.log(Paco.getDireccion());

class Trabajador extends Persona {
    #sueldo;
    #horasDiarias;

    constructor(name, surname, direction, income, hours, job) {
        super(name, surname, direction);
        this.#sueldo = income;
        this.#horasDiarias = hours;
    }

    setSueldo(income) {
        this.#sueldo = income;
    }
    getSueldo() {
        return this.#sueldo;
    }

    setHorasDiarias(hours) {
        this.#horasDiarias = hours;
    }
    getHorasDiarias() {
        return this.#horasDiarias;
    }

}

class Informatico extends Trabajador{
    #puesto;
    #programando = false;
    
    constructor(name, surname, direction, income, hours, position) {
        super(name, surname, direction, income, hours);
        this.#puesto = position;

    }

    setPuesto(position) {
        this.#puesto = position;
    }
    getPuesto() {
        return this.#puesto;
    }

    programar() {
        if(this.#programando == false) {
            this.#programando = true;
            console.log("Ahora mismo, "+this.getNombre()+" esta programando.");
        } else {
            this.#programando = false;
            console.log("Ahora mismo, "+this.getNombre()+" ya no esta programando.");
        }
    }
    aprenderLenguaje(leng) {
        console.log(this.getNombre()+" "+this.getApellidos()+" ha aprendido a programar en "+leng);
    }
    reunion() {
        console.log(this.getNombre()+" "+this.getApellidos()+" se ha reunido con sus clientes.");
    }

}

class Conserje extends Trabajador{
    #limpiando = false;
    constructor(name, surname, direction, income, hours) {
        super(name, surname, direction, income, hours);
    }

    limpiar() {
        if(this.#limpiando == false) {
            this.#limpiando = true;
            console.log("Ahora mismo, "+this.getNombre()+" esta limpiando.");
        } else {
            this.#limpiando = false;
            console.log("Ahora mismo, "+this.getNombre()+" ya no esta limpiando.");
        }
    }
    cogerTelefono() {
        console.log(this.getNombre()+" esta respondiendo al telefono.");
    }
    cerrarPuerta() {
        console.log(this.getNombre()+" "+this.getApellidos()+" ha cerrado la puerta.")
    }

}

let Bedel = new Conserje("Bede", "Licuelo", "Calle Norte", 1200, 8);
Bedel.limpiar();
Bedel.limpiar();
Bedel.cerrarPuerta();
Bedel.cogerTelefono();
console.log(Bedel.getHorasDiarias());
Bedel.setHorasDiarias(9);
console.log(Bedel.getHorasDiarias());

let Juanjo = new Informatico("Juanjo", "Castro", "Calle Buenavista, Nº19", 2000, 8, "Senior");
Juanjo.programar();
Juanjo.programar();
Juanjo.aprenderLenguaje("JavaScript");
Juanjo.reunion();
console.log(Juanjo.getPuesto());
console.log(Juanjo.getSueldo());
Juanjo.setSueldo(3000);
console.log(Juanjo.getSueldo());
