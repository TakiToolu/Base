(function(){
  let last=0;
  if(!window.rAF){
    window.rAF=function(cb,element){
      let now=new Date.getTime();
      let time2call=now-last;
      let id=window.setTimeout(()=>{
        cb();
      },time2call);
      last=now+time2call;
      return id;
    }
  }
  if(!window.cancleAF){
    window.cancleAF=function(id){
      clearTimeOut(id);
    }
  }
}())