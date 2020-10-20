let pro= new Promise((resolve,reject)=>{
  let xhr=new XMLHttpRequest();
  xhr,open('GET',url,true);
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