var box=document.getElementById('btn');
var btns=document.getElementsByTagName('input');
var len=btns.length;
// for(var i=0;i<len;i++){
//   btns[i].onclick=function () {
//     alert(i)
//   }
// }
/*
* 因为JS中的事件绑定是异步的，JS是同步执行的，当轮到标签绑定事件的时候，同步执行的
* 循环已经结束，此时全局变量 i 的值为 5 ，而执行方法的私有作用域没有i，顺着作用域链网上找到
* 全局变量i=5，所以都榜上了5
*
* */

//解决方案一：自定义属性——给标签添加私有属性，让其弹出的是标签自己的属性
for(var i=0;i<len;i++){
  btns[i].val=i;
  btns[i].onclick=function () {
    alert(this.val)
  }
}
//闭包解决：形参将i传入并保存在私有作用域（不会被销毁），性能不好
for(var i=0;i<len;i++){
  //自执行函数
  ~function (i){
    btns[i].onclick=function () {
      alert(i);
    }
  }(i)
}
for(var i=0;i<len;i++){
  //自执行函数
    btns[i].onclick=(function (i) {
      return function (){
        alert(i);
      }
    })(i)
}
//let块级作用域，把var改成let