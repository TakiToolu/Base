

function render(){
  if(flag==true){
    if(left>=100){
      e.style.left=`${left++}px`
    }else{
      e.style.left=`${left--}px`
    }
  }
}
(function a(time){
  render();
  id=window.requestAnimationFrame(a);//会返回一个ID
  if(left==50){
    window.cancelAnimationFrame(id);//取消
  }
})()
