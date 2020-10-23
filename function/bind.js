

function myBind(fn,context){
  return function (){
    return fn.call(context,arguments);
  }
}