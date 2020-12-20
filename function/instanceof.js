function myinstanceof(L,R){
  let obj=R.prototype;
  L=L.__proto__;
  while(true){
    if(L==null)return false;
    if(L==obj)return true;
    L=L.__proto__;
  }
}
function a(){

}

console.log(myinstanceof(a, Function))
console.log(myinstanceof(a, Object))
let b="12";
let c=new String("we");
console.log(myinstanceof(b, Object))
console.log(b instanceof Object)
console.log(c instanceof Object)
console.log(typeof(b))
console.log(typeof(c))
console.log(b.__proto__.prototype)


function myinstanceOf(L,R){
  let obj=R.prototype;
  L=L.__proto__;
  while(true){
    if(L==null)return false;
    if(L==obj)return true;
    L=L.__proto__;
  }
}