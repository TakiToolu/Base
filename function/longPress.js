function longPress(target,cb){
  let timer=null;
  target.addEventListener('touchstart',(e)=>{
    e.preventDefault();
    target.timer=setTimeOut(()=>{
      console.log('changan');
    },500);
  })
  target.addEventListener('touchend',(e)=>{
    if(target.timer){
      console.log('点击事件，不是长按');
      clearTimeOut(timer);
      return false;
    }
    cb();
  })
}