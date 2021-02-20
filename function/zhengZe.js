function template(temp1,data){
  let res=temp1;
  for(let key of data){
    result=result.replace(new RegExp(/\(`key`\)/g),data[key]);
  }
  return res;
}