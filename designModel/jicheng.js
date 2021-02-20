//原型链继承,不能向父传递参数；
// 可以继承原型属性和方法,无法传递参数
function fu(){
  this.value='';  //实例属性
}
fu.prototype.yuanxingfangfa=function(){} // 原型方法
function son(){this.value=''}
son.prototype=new fu()

//借用构造函数——伪造对象，可以传递参数、继承对象实例属性，但父类定义的方法，子类不可见
// 可以继承实例属性和方法,传递参数,无法继承原型属性和方法
function fu(val){
  this.value=val;
}
function son(val) {
  fu.call(this,val);
}

//组合模式
// 可继承  原型+实例 的属性和方法
function fu(){this.value;}
fu.prototype.me=function(){};
function son(){
  fu.call(this)
}
fu.prototype=new fu();

//原型式 继承:通过有对象创建新对象，加入原型链，该对象
function son(obj){
  function F(){}
  F.prototype=obj;
  return new F();
}
//寄生式  也是根据一个对象，内部增强他后，返回他
function son(obj){
  var newobj=object(obj);//创建一个新对象
  newobj.method=function() {}
  return newobj;
}
//寄生组合式
function fu(){}
function son(){}
function inherit(A,B){
  var obj=object(B.prototype);
  obj.constructor=A;
  A.prototype=obj;
}
inherit(son,fu);
