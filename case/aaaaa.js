function EatMan(name){
  return new _eatman(name);
}
function _eatman(name) {
  /** 代码实现 */
  this.arr=[];
  this.arr.push(()=>{
    console.log(`Hi This is ${name}!`)
  })
  setTimeout(()=>{
    if(this.arr.length>0){
      for(let i=0;i<this.arr.length;i++){
        this.arr[i]();
      }
    }
  },0)

}

_eatman.prototype.eat=function(val){
  this.arr.push(()=>{
    console.log(`Eat ${val}`);
  })
  return this;
}
_eatman.prototype.eatFirst=function(val){
  this.arr.unshift(()=>{
    console.log(`Eat ${val}`);
  })
  return this;
}

// EatMan('Hank').eat('dinner').eatFirst('lunch').eatFirst("breakfast")
// EatMan('lunch').eat('dinner').eatFirst('lunch')
// EatMan('Hank').eat('dinner').eat('supper')
EatMan('Hank');