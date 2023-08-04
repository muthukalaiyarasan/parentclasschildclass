class Parent {
   constructor(a) {
      this.a= a;
   }
  
   showValues() {
     
      console.log("the value is="+this.a);
   }
}
class Child extends Parent {
   constructor(a,b){
      super();
      this.b = b;
   }
  
   showValues() {
      
      console.log("The value is="+`${this.b}`);
   }
}
var parentObject = new Parent(100);
parentObject.showValues();
var childObject = new Child(400,500);
childObject.showValues();