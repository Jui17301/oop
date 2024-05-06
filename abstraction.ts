{
  //

  //abstraction: 1. interface 2.abstract

  //1. using interface
   //idea
  interface Vehicle1{
    startEngine():void;
    stopEngine():void;
    move():void;
  }

  // real implementation
  class Car1 implements Vehicle1{
    startEngine(): void {
      console.log(`I am starting the car Engine`);
    }
    stopEngine(): void {
      console.log(`I am starting the car Engine`);
    }
    move(): void {
      console.log(`I am moving the car Engine`);
    }
    test(){
      console.log(` I am just testing`)
    }
  }
  const toyotaCar = new Car1();
  toyotaCar.startEngine();


  // 2. using Abstract class : leader class


  // idea
 abstract class Car2{

   abstract startEngine(): void ;
   abstract stopEngine(): void ;
   abstract move(): void ;
    test(){
      console.log(` I am just testing`)
    }

  }

  class ToyotaCar extends Car2{

     startEngine(): void {
      console.log(`I am starting the car Engine`);
    }
    stopEngine(): void {
      console.log(`I am starting the car Engine`);

    }
    move(): void {
      console.log(`I am moving the car Engine`);
    }
  }

  // const hondaCar = new Car2();
  // hondaCar.startEngine();










  //
}