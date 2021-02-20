function myNew(Fn){
  // let obj=new Object();
  let obj=Object.create(Fn.prototype);
  obj.__proto__=Fn.prototype;
  Fn.apply(obj,[].slice.call(arguments,1));
  return obj;
}

function A(){
  this.name="zxx";
  this.age=12;
}
let b=new A();
console.log(b);
