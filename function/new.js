function myNew(Fn){
  let obj=new Object();
  obj.__proto__=Fn.prototype;
  Fn.apply(obj,[].slice.call(arguments,1));
  return obj;
}
