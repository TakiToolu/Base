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
    return fn.apply(arg);
  }
}
let geturl=curry(getUrl,'http://localhost:8080/','auth');
let login=geturl('/login');
let logout=geturl('/logput')