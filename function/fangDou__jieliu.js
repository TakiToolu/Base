function fangDou(cb,t){
  let timer=null;
  return function(){
    let context=this;
    let arg=arguments.slice(0);
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      cb.apply(context,arg);
    },t);
  }
}
// 防抖动函数debounce



//节流就是让函数触发一次后修庙一阵
function throttle(cb,t){
  let flag=true;
  return function () {
    if(!flag){
      return false;
    }
    flag=false;
    setTimeout(()=>{
      cb();
      flag=true;
    },t)

  }
}
// 简单的节流函数
function throttle(fn, wait) {
 let last=new Date();
 return function(){
   let arg=arguments.slice(0);
   let now=new Date();
   let context=this;
   if(now-last>wait){
     fn.apply(this,arg);
     last=now;
   }
 }
};