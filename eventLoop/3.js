async function a1 () {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
  await async3()
  console.log('244444')
}
async function a2 () {
  console.log('a2')
  await async3()
  console.log('a2 end')
}
async function async3(){
  console.log('a33333')
}
console.log('script start')

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0)

Promise.resolve().then(() => {
  console.log('promise1')
}).then(()=>{
  console.log('123')
}).then(()=>{
  console.log('aaaa')
}).then(()=>{
  console.log('bbb')
})

a1()

// let promise2 = new Promise((resolve) => {
//   resolve('promise2.then')
//   console.log('promise2')
// })
//
// promise2.then((res) => {
//   console.log(res)
//   Promise.resolve().then(() => {
//     console.log('promise3')
//   })
// })
console.log('script end')