function fangdou(cb,t){
  let timer=null;
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(cb,t);

  }
}

function a(){
  console.log("hhhh")
}

