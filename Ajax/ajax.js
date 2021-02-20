let pro= new Promise((resolve,reject)=>{
  let xhr=new XMLHttpRequest();
  xhr.open('GET',url,true);
  xhr.onreadystatechange=function(){
    if(this.readyState==4){
      if(this.status==200){
        resolve(this.responseText,this);
      }else{
        let reason={
          code:this.status,
          response:this.response
        }
        reject(reason);
      }
    }
  }
})

function ajax(obj){
  return new Promise((reslove,reject)=>{
    let xhr=new HMLHttpRequest();
    xhr.open(obj.method,obj.url,true);
    xhr.onreadyStatechange=function(){
      if(this.readyState==4){
        if(this.status==200){
          resolve(this.responseText,this);
        }else{
          let reason={
            code:this.status,
            response:this.response
            }
            reject(reason);
          }
        }
      }
  })
}

function ajax(obj){
  return new Promise((resolve,reject)=>{
    let xhr=new XmlHttpRequest();
    xhr.open(obj.method,obj.url,true);
    xhr.onreadyStatechange=function(){
      if(this.readyState==4){
        if(this.status==200){
          resolve(this.responseText,this);
        }else{
          let reason={
            code:this.status,
            response:this.response
          }
          reject(reason);
        }
      }
    }
  })
}