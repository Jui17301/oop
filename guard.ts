{
  // type guards

  //typeof guard
  type Alphanumeric = string|number ;
  
  const add=(
    param1: Alphanumeric , 
    param2:Alphanumeric
  ):Alphanumeric => {
    if(typeof param1==='number' && typeof param2==='number')
      {
        return param1+param2;
      }
      else{
        return param1.toString() +param2.toString();
      }
  }

  const result1 = add(2,3); //5
  const result2 = add("2","3"); //23
  console.log(result1);
  
  // in guard

  type NormalUser ={
    name: string
  }
  type AdminUser ={
    name:string;
    role:"admin"
  }
  const getUser =(user:NormalUser | AdminUser)=>{
    if('role' in user){
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    }
    else{
      console.log(`My name is ${user.name} `)
    }
  }
  const normalUser : NormalUser={
    name:"Normal Vai"
  }
  const adminUser : AdminUser={
    name:"Admin Vai",
    role:"admin"
  }
getUser(normalUser);


// instance of guard
class Animal{
  name:string;
  species:string;

  constructor(name:string,species:string){
    this.name=name;
    this.species = species;
  }
  makeSound(){
    console.log("I am making sound");
  }
}

class Dog extends Animal{
  constructor(name:string,species:string){
    super(name,species);
  }
  makeBark(){
    console.log("I am barking");
  }
}

class Cat extends Animal{
  constructor(name:string,species:string){
    super(name,species);
  }
  makeMewa(){
    console.log("I am Mewaing");
  }
}
// check using function with instanceof:
const isDog=(animal:Animal): animal is Dog=>{
  return animal instanceof Dog;
}
const isCat=(animal:Animal): animal is Cat=>{
return animal instanceof Cat;
}
const getAnimal =(animal:Animal)=>{
  if(isDog(animal)){
    animal.makeBark();
  }
  else if(isCat(animal)){
    animal.makeMewa()
  }
  else{
    animal.makeSound();
  }
}

const dog =new Dog('Dog vai','dog');
const cat =new Cat('cat vai','cat');

getAnimal(dog);
  // 
}