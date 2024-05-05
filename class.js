"use strict";
{
    // oop class
    class Animal {
        // class property
        //  public name:string;
        //  public species:string;
        //  public sound: string;
        //parameter properties:
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name =name;
            // this.species =species;
            // this.sound =sound;
        }
        //class-> normal function->method
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    // instance
    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
    const cat = new Animal("Persian", "cat", "meaw meaw");
    cat.makeSound();
}
