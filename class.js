"use strict";
{
    // oop class
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        //class->function->method
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    // instance
    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
    const cat = new Animal("Persian", "cat", "meaw meaw");
    cat.makeSound();
}
