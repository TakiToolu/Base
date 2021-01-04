/*
//写一个async/await(…) 实现sleep函数（我知道需要return一个Promise对象）

(async () => {
  document.querySelector('#root').innerText = '1'
  await sleep(1000)
  document.querySelector('#root').innerText = '2'
})()

// 实现sleep函数，当时没写出来，现在查资料，补上
function sleep(time){
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, time);
  })
}
*/

function sleep(t){
  return new Promise(resolve=>{
    setTimeout(resolve,t)
  })
}

(async()=>{
  console.log('11');
  await sleep(1000 );
  console.log('22');
})()