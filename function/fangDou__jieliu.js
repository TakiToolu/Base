function fangDou(cb,t){
  let timer=null;
  return function(){
    let context=this;
    let arg=Array.from(arguments).slice(0);
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      cb.apply(context,arg);
    },t);
  }
}
// 防抖动函数debounce
function debounce(cb,t){
  let timer=null;
  return function(...args){
    let context=this;
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      cb.apply(context,args)
    },t)
  }
}

function throttle(cb,t){
  let flag=true;
  return function(...args){
    if(!flag){return false;}
    flag=false;
    setTimeout(()=>{
      cb.apply(this,args);
      flag=true;
    },t)
  }
}

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
function thottle(fn,t){
  let last=new Date();
  return function(){
    let args=[].prototype.slice.call(0);
    let newdate=new Date();
    let context=this;
    if(newdate-last>t){
      fn.apply(context,args);
      last=newdate;
    }
  }
}