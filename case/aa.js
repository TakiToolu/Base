function EatMan(name){
  return new _eatman(name);
}
function _eatman(name) {
  /** 代码实现 */
  this.first=[];
  this.hello=[];
  this.eatArr=[];
  if(first.length>0){
    first.pop()();
  }
  Promise.resolve().then(()=>{
    console.log(`Hi This is ${name}!`)
  })
  if(eatArr.length>0){
    for(let i=0;i<eatArr.length;i++){
      eatArr[i]();
    }
  }
}

_eatman.prototype.eat=function(val){
  this.eatArr.push(()=>{
    setTimeOut(()=>{
      console.log(`Eat ${val}`);
    },0)

  })
}
_eatman.prototype.eatFirst=function(val){
  this.first.push(()=>{
    console.log(`Eat ${val}`);
  })
}

// EatMan(“Hank”).eat('dinner').eatFirst(“lunch”).eatFirst("breakfast")