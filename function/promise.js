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