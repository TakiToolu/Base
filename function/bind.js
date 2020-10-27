

// function myBind(fn,context){
//   return function (){
//     return fn.call(context,arguments);
//   }
// }
Function.prototype.myBind = function(thisArg) {
  if (typeof this !== 'function') {
    return;
  }
  var _self = this;
  var args = Array.prototype.slice.call(arguments, 1)
  var fnBound = function () {
    // 检测 New
    // 如果当前函数的this指向的是构造函数中的this 则判定为new 操作
    var _this = this instanceof _self ? this : thisArg;
    return _self.apply(_this, args.concat(Array.prototype.slice.call(arguments)));
  }
  // 为了完成 new操作
  // 还需要做一件事情 执行原型 链接 （思考题，为什么？
  fnBound.prototype = this.prototype;
  return fnBound;
}

Function.prototype.bind2=function(context){
  if(typeof this !=='function'){
    return;
  }
  var self=this;
  var args=Array.prototype.slice.call(arguments,1);
  var fn=function () {
      var _this=this instanceof _self?this:context;
      return self.apply(_this,args.concat(Array.prototype.slice.call(arguments)));
  }
  return fn;

}