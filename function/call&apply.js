// Function.prototype.mycall=function (context){
//   context.fn=this;
//   contex.fn();
// }
let a={
  name:'hjk',
  age:12
}
Function.prototype.mycall=function (context){
  context=context||window;
  context.fn=this;
  return context.fn(Array.prototype.slice(arguments,1));
}
function b(){
  console.log(this.name);
}
b.mycall(a);

Function.prototype.myApply=function(context,arg){
  context=context||window;
  context.fn=this;
  return context.fn(arg);
}
function c(arr) {
  console.log(this.age);
  console.log(arr);
}
c.myApply(a,[1,2,3])

// console.log(typeof b)//funtion
// console.log(typeof [])//object
