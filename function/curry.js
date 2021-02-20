//函数柯理化，单参数化
function curry(fn){
  var args=Array.prototype.slice.call(arguments,1);//返回第二个位置开始的参数，fn是第一个
  return function(){
    var innerargs=Array.prototype.slice.call(arguments);
    var finalargs=args.concat(innerargs);
    return fn.apply(finalargs);
  }
}

function curry(fn){
  let arg=Array.prototype.slice(arguments,1);
  return function(){
    let innerarg=Array.from(arguments);
    arg=arg.concat(innerarg);
    return fn.apply(this,arg);
  }
}
// let geturl=curry(getUrl,'http://localhost:8080/','auth');
// let login=geturl('/login');
// let logout=geturl('/logput')


function cc(fn,...args){
  return function(){
    var innerargs=Array.prototype.slice.call(arguments);
    if(innerargs.length==0){
        return fn.call(this,...args);
      }else{
        var finalargs=[...args,...innerargs];
        return cc(fn,...finalargs);
      }
    }
}
var sum=cc(function(){
  var args=Array.prototype.slice.call(arguments);
  let res=args.reduce((pre,next)=>{
    return pre+next;
  },0)
  return res;
})
console.log(sum(1,3)(2)());
console.log(sum(1,3)(2)(4)()); //10
console.log(sum(1,3)(2,6)(4)()); //16
console.log(sum(1,3)(2,6)(4)(7)()); //23

function curry(fn,...args){
  return function(){
    let innerArgs=[].prototype.slice.call(arguments,1);

    if(innerArgs.length==0){
      return fn.call(this,...args);
    }else{
      let finalArgs=args.concat(innerArgs);
      return curry(fn,...finalArgs);
    }
  }
}
function sum(...args){
  return args.reduce((pre,next)=>{
    return pre+next;
  },0)
}