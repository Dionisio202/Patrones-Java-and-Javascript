class Counter{
    #intance;
    #counter = 0;
    constructor(){
        if (this.#intance) {
            throw new Error("Error! Only one instance is allowed");
        }
        //Like creating a new instance with = new Counter();
        this.#intance = this;

    }

    getInstance(){
        return this.#intance;
    }

    getCount(){
        return this.#counter;
    }

    increment(){
        return ++this.#counter;
    }
   decrement(){
    return --this.#counter;
   }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;