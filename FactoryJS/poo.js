class Persona{
    //nombre -> publico
    //#nombre -> privado
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    cantar(){
        console.log(`Hola, me llamo ${this.#nombre} y tengo ${this.#edad} años`);
    }
}
const persona1 = new Persona('Juan', 20);
console.log(persona1.getNombre());
persona1.setNombre('Carlos');
console.log(persona1.getNombre());
console.log(persona1);

class Estudiante extends Persona{
    constructor(nombre, edad, asignatura){
        super(nombre, edad);
        this.asignatura = asignatura;
    }

    estudiar(){
        console.log(`${this.getNombre()} estudia ${this.asignatura}`);
    }
    cantar(){
        console.log(`${this.getNombre()} canta en el colegio`);
    }           
}

console.log("*******");
const estudiante = new Estudiante('Juan', 20, 'Matemáticas');
estudiante.cantar();
estudiante.estudiar();
console.log(estudiante);