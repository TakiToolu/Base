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


window.onload=function() {
  let imgs = document.querySelectorAll('img');

  function lazyLoad(imgs) {
    let h = window.clientHeight;
    let s = document.body.offsetTop || document.documentElement.scrollTop;
    for (let i = 0; i < imgs.length; i++) {
      if (imgs.offsetTop < h + s + 100) {
        imgs[i].src = imgs[i].getAttribute('src-data');
        // (function(i) {
        //   setTimeout(() => {
        //     let image = new Image();
        //     image.src = imgs[i].getAttribute('src-data');
        //     image.onload = function() {
        //       ims[i].src = image.src;
        //     }
        //   }, 0)
        // })(i)
      }
    }
  }
  lazyLoad(imgs);
  function fangdou(fn,t){
    let timer=null;
    return function(){
      if(timer){
        return false;
      }
      clearTimeout(timer);
      let context=this;
      let args=Array.slice.call(arguments,0);
      timer=setTimeout(()=>{
        fn.apply(this,args);
      },t)
    }
  }
  window.onscroll = function() {
    lazyLoad(imgs);
  }
}