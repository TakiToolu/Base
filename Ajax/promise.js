//全局宏定义
var PENDING =0;
var FULLFILLED = 1;
var REJECTED =2;
function Promise(fn){
  var self=this;
  self.state=PENDING;//初始化状态
  self.value=null;//异步结果存储
  self.handlers=[];//存储回调函数
  self.handErrors=[];
  function Resolve(result){
    if(self.status==PENDING){
      self.status=FULLFILLED;
      self.value=result;
      for(let i=0;i<handlers.length;i++){
        self.handlers[i](result);
      }
    }
  }
  function Reject(err){
    if(self.status==PENDING){
      self.status=REJECTED;
      self.value=err;
      for(let i=0 ;i<self.handErrors.length;i++){
        self.handErrors[i](err);
      }
    }
  }
  fn&&fn(Resolve,Reject);
}

class myPromise{
  constructor(fn){
    this.state=PENDING;
    this.value;
    this.callbacks=[];
    this.failbacks=[];
    try{
      fn.call(this,this.resolve(this),this.reject(this));
    }catch(e){
      this.reject.call(this,e);
    }
  }
  resolve(value){
    if(this.state==PENDING){
      this.state=FULLFILLED;
      this.value=value;
      this.callbacks.forEach(item=>{
        item.call(this,value);

      })
      this.state=PENDING;
      this.callbacks=[];
      this.failbacks=[];
      return this;
    }
  }
  reject(error){
    if(this.status==PENDING){
      this.state=REJECTED;
      this.failbacks.forEach(item=>{
        item.call(this,error);

      })
      this.state=PENDING;
      this.callbacks=[];
      this.failbacks=[];
      return this;
    }
  }
  then(resolvefn,rejectfn){
    if(typeof resolvefn==='function'){
      this.callbacks.push(resolvefn);
    }
    if(typeof rejectfn==='function'){
      this.failbacks.push(rejectfn);
    }
    return this;
  }


}





Promise.prototype.then=function (onResolved,onReject){
  var self=this;
  return new Promise(function(resolve,reject){
    var onResolvedFade=function(val) {
      var ret = onResolved ? onResolved(val) : val;
      if (Promise.isPromise(ret)) {
        ret.then(function (val) {
          resolve(val);
        })
      }else{
        resolve(ret);
      }
    }
    var onRejectedFade=function (err) {
        var ret=onReject?onReject(err):err;
        reject(err);
      }
    self.handlers.push(onResolvedFade);
    self.handErrors.push(onRejectedFade);
    if(self.status==FULLFILLED){
      onResolvedFade(self.value);
    }
    if(self.status==REJECTED){
      onRejectedFade(self.value);
    }
  })
}

function promiseAll(promises){
  let res=[];
  for(let i=0;i<promises.length;i++){
    promises[i].then(value =>{
      res.push(value);
      if(res.length==promises.length){
        return resolve(res);
      }
    },error=>{
      reject(error);
    })
  }
}

function promiseRace(promises){
  return new Promise(function(resolve,reject){
    for(let i=0;i<promises.length;i++){
        Promise.resolve(promises[i]).then(data=>{
          resolve(data);
        },errr=>{
          reject(errr);
        })
    }
  })

}


//一个promise list，一次最多只能执行n个，当全部执行完成之后，调用callback
function send(promises,k,cb){
  let queue=0,i=0;
  while(i<promises.length){
    if(queue<promises.length){
      for(let j=i;j<i+k-queue;j++){
        i++;
        queue++;
        promises[j].then(()=>{
          queue--;
        })
      }
    }
  }
  cb();
}