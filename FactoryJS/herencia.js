function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

function Estudiante(nombre, edad, asignatura){
    Persona.call(this, nombre, edad);
    this.asignatura = asignatura;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.estudiar = function(){
    console.log(`${this.nombre} estudia ${this.asignatura}`);
}

const estudiante = new Estudiante('Juan', 20, 'Matemáticas');
estudiante.saludar();
estudiante.estudiar();