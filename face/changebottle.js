function cha(num){
  let count=0;
  // let num=parseInt(line);
  console.log(num);
  while(num>1){
    let temp=Math.floor(num/3);
    count+=temp;
    num=temp+num%3;
    if(num==2){
      count++;
      num=0;
    }
    console.log('xunhuan',num,count)
  }
  console.log(count);
}
cha(81)