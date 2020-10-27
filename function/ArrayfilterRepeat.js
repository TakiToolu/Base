//自定义函数
//对象方法
~function(){
  var pro=Array.prototype;
  pro.myDistinct=function myDistinct() {
    var obj={};
    for(var i=0;i<this.length;i++){
      var item=this[i];
      if(typeof obj[i]!=='undefined'){
        //将最后一项一道当前，splice会将索引打乱
        this[i]=this[this.length-1];
        this.length--;
        i--;
        continue;
      }
      obj[item]=item;
    }
    obj=null;
    return this;
  }
}