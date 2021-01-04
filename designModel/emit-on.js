//发布订阅模式
function Girl(name){
  this.name=name;
  this.event={};
}
Girl.prototype.on=function(eventName,callback){
  if(this.event[eventName]){
      this.event[eventName].push(callback);
  }else{
    this.event[eventName]=[callback];
  }
}
Girl.prototype.emit=function(eventName,...args){
  // let arg=Array.from(arguments).slice(1)
  if(this.event[eventName]){
    // this.event[eventName].forEach(cb=>cb(arg))
    this.event[eventName].forEach(cb=>cb.apply(this,args))
  }else{
    console.log('该事件不存在');
  }
}
let eat=function(...args){console.log(args+'吃');}
let sleep=function(name){console.log(name+'睡觉');}
let cry=function(name){console.log(name+'哭');}
let girl=new Girl("zxx");
console.log(girl.name);
girl.on("sad",eat)
girl.on("sad",sleep)
girl.on("sad",cry)
girl.emit("sad","zxx","zxk");