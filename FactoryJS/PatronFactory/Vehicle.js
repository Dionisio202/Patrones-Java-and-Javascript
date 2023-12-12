class Vehicle{
    constructor(wheeler, type){
        this.wheeler = wheeler;
        this.type = type;
    }

    getWheeler(){
        return this.wheeler;
    }

    getType(){
        return this.type;
    }

    description(){
        console.log(`This vehicle has ${this.wheeler} ${this.wheeler > 1? 'wheels': 'wheel'} and is ${this.type}`);
    }

}

class Monocycle extends Vehicle{
    constructor(){
        super(1, 'Monocycle');
    }
}

class Car extends Vehicle{
    constructor(){
        super(4, 'Car');
    }
}

class Truck extends Vehicle{
    constructor(){
        super(6, 'Truck');
    }
}

export {Monocycle, Car, Truck} // Exporting the classes