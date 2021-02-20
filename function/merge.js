let a=[[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
function merge(arr){
  let mer=
      arr[0];
  for(let i=1;i<arr.length;i++){
    let inner=arr[i];
    let lenp=mer.length,lenq=inner.length;
    let p=0,q=0;
    console.log(lenp,lenq);
    while(p!=lenp&&q!=lenq){
      while(inner[q]>=mer[p]){
        p++;
      }
      console.log(inner,p,q);
      mer.splice(p,0,inner[q]);
      q++;
    }
    if(q!==lenq){
      mer.concat(inner.slice(q));
    }
    console.log(inner,mer)
  }
  return mer;
}
console.log(merge(a))