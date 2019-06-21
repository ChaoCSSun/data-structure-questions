
class A {
 constructor(value) {
     this.value = value;
 }

 add(x) {
     return this.value +x;
 }
 
 minus(y) {
     return this.value -y
 }
}

let c = new A(5);
c.add(2).minus(1);