function jsonp({url,params,cb}){
  return new Promise((resolve,reject)=>{
    window[cb]=function (data) {
      resolve(data);
      document.body.removeChild(script);
    }
    params={...params,cb}///{}=>wd=b&cb=show
    let arrs=[];
    for (let key in params){
      arrs.push(`${key}=${params[key]}`);
    }
    let script =document.createElement('script');
    script.src=`${url}?${arrs.join('&')}`;
    document.body.appendChild(script);
  })
}
/*缺点：
只能发送get请求，不支持post put delete
不安全 先XSS攻击
* */
jsonp({
  url:'http://localhost:3000/say',
  params:{wd:'我爱你'},
  cb:'show',
}).then(data=>{
  console.log(data);
})