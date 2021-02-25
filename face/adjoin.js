
function adjoin(arr, condition) {
  /* 代码实现 */
  let temp=[];
  let res=[];
  arr.forEach((item)=>{
    if(condition(item)){
      temp.push(item)
    } else{
      if(temp.length!==0)res.push(temp);
      res.push(item);
      temp=[];

    }
    // console.log(item,temp,res)
  })
  if(temp.length!==0)res.push(temp);
  console.log('111',res);
  return res;

}
adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
adjoin([1, 2, 3, 4], item => item < 3); // [[1, 2], 3, 4]