var myAjax=function (url='',type='GET',dataType='json'){
  var promise=new Promise(function(resolve,reject){
    var xhr=new XMLHttpRequest();
    xhr.open(type,url);
    xhr.onreadystatechange=handler;
    // handler的替代
    // xhr.onload=function(){
    //   //xhr.readState==4 xhr.status==200
    //   resolve(xhr.response)
    // }
    // xhr.onerror=function(err){
    //   reject(err);
    // }
    xhr.responseType=dataType;
    xhr.setRequestHeader("Accept","application/json");
    xhr.send();
    function handler(){
      if(this.readyState!==4){
        return ;
      }
      if(this.status==200){
        resolve(this.response);
      }else{
        reject(new Error(this.statusText));
      }
    }
  });
  return promise;
}

myAjax('/posts.json').then(function(json){
  console.log('返回的内容'+json);
},function(error){
  console.log('出错了',error);
})