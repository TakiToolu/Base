//发布 emit 订阅 on
function Girl () {
  this._events={}
}
Girl.prototype.on=function(eventName,callback){

  if(this._events[eventName]){//不是第一次触发
    this._events[eventName].push(callback);
  }else{
    this._events[eventName]=[callback];
  }
}
Girl.prototype.emit=function(eventName,...args){
  // 取参数[].slice.call(arguments,1)
  //将类数组转换成数组 Array.from(arguments).slice(1)
    if(this._events[eventName]){
      this._events[eventName].forEach(cb=>cb.apply(this,...args));
    }
}
let girl=new Girl();
let cry=(who)=>{console.log(who,'cry');}
let eat=(who)=>{console.log(who,'eat');}
let shopping=(who)=>{console.log(who,'shopping');}
girl.on('sad',cry);
girl.on('sad',eat);
girl.on('sad',shopping);
girl.emit('sad','zxx','aaa');


