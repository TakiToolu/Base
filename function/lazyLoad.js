window.onload=function(){
  let imgs=document.querySelectorAll('img');
  //获取元素到浏览器顶部距离
  function getTop(e){
    return e.offsetTop;
  }
  function lazyLoad(imgs){
    //可视区高度
    let h=window.innerHeight;
    let s=document.documentElement.scrollTop||document.body.scrollTop;
    for(let i=0;i<imgs.length;i++){
      if(getTop(imgs[i])<h+s){
        (function(i){
          setTimeout(()=>{
            let temp=new Image();
            temp.src=img[i].getAttribute('data-src');
            temp.onload=function(){
              imgs[i].src=imgs[i].getAttribute('data-src');
            }
          },2000)
        })(i)

      }
    }
  }
  lazyLoad(imgs);
  window.onscroll=function(){
    lazyLoad(imgs);
  }

}