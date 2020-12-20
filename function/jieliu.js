//节流就是让函数触发一次后修庙一阵

function throttle(cb,t){
  let flag=true;
  return function () {
    if(!flag){
      return false;
    }else{
      flag=false;
      setTimeout(()=>{
        cb();
        flag=true;
      },t)
    }
  }
}