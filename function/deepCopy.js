//for in循环遍历赋值
function deepCopy(ob1){
  let res=(ob1 instanceof Object)?{}:[];
  for(let key in ob1){
    if(ob1[key] instanceof Array) {
      res[key] = [];
      res[key]=deepCopy(ob1[key]);
    }else if(ob1[key] instanceof Object){
      res[key]={};
      res[key]=deepCopy(ob1[key]);
    }else{
      res[key]=ob1[key];
    }
  }
  return res;
}
//
function deepClone1(obj){
  let res=JSON.parse(JSON.stringify(obj));
  return res;
}
//
function deepClone2(obj) {
  let res=Object.create(Object.getPrototypeOf(obj));
  let propsName=Object.getOwnPropertyNames(obj);
  propsName.forEach(function(item){
    let value=Object.getOwnPropertyDescriptor(obj,item);
    Object.defineProperty(res,item,value);
  })
  console.log(res);
  return res;
}


var obj1={
  name:'zxx',
  age:18,
  cat:{
    name:'pingtou',
    age:2
  },
  friends: {
    name: 'duoduo',
    age: 12,
  }
}

// var obj2=deepCopy(obj1);
// var obj2=deepClone1(obj1);
var obj2=deepClone2(obj1);


console.log(obj2);
obj1.name='zhaojing';
console.log(obj2);
obj1.cat.age=8;
console.log(obj2);
obj2.age=88;
console.log(obj1);
console.log(obj2);
