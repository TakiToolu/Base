function findTopSum(arr, k, m) {
  /** 代码实现 */
  arr.sort((a,b)=>b-a);
  console.log(arr);
  let count=0;
  let res=0;
  for(let i=0;i<arr.length;i++){
    let pre=i>0?arr[i-1]:0;
    if(arr[i]!=pre){
      count++;
    }
    console.log(arr[i],count);
    if(count==k||count==m){
      res+=arr[i];
    }
  }
  console.log(res)
  return res;
}
let arr = [1,2,4,4,3,5];
let k = 2, m = 4;
findTopSum(arr, k, m)