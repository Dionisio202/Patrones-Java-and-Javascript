function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.hablar = function(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

// Agregar funciones al prototipo de Persona
Persona.prototype.cantar = function(){
    console.log(`${this.nombre} sabe cantar`);
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
}

const persona1 = new Persona('Juan', 20);
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1);
persona1.hablar();