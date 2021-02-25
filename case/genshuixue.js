let a=[[1, 2, 3],[4, 5, 6],[7, 8, 9]]
function bbb(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    let temp=0;
    for(let j=i;j>=0;j--){
      console.log(j,temp,arr[j][temp]);
      res.push(arr[temp++][j]);
    }
  }
  for(let i=1;i<arr.length;i++){
    let hang=i;
    for(let j=arr.length-1;hang<arr.length;j--){
      res.push(arr[hang++][j]);
    }
  }
  console.log(res)
}

bbb(a)