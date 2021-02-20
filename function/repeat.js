function repeat(func,times,wait) {
  let tt=0;
  return function(){
    let timer=setInterval(()=>{
      if(tt<times){
        tt++;
        func();
      }else{
        clearInterval(timer);
      }
    },wait)
  }
}