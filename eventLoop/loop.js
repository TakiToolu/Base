//修改下面代码输出01234
/*
function a () {
  for (var i = 0; i < 5; i++) {
    this.i = i
    setTimeout(function () {
      console.log(i)
    }, 0)
    console.log(this.i)
  }
}
*/

//方案1：改成块级变量
function a () {
  for (let i = 0; i < 5; i++) {
    this.i = i
    setTimeout(function () {
      console.log(i)
    }, 0)
    console.log(this.i)
  }
}

// function a () {
//   for (let i = 0; i < 5; i++) {
//     (function (i) {
//       this.i = i
//       setTimeout(() => {
//         console.log(i)
//       }, 0)
//       console.log(this.i)
//     })(i)
//   }
// }

//方案2：

/*function a () {
  for (var i = 0; i < 5; i++) {
    this.i = i
    setTimeout(function () {
      console.log(this.i)
    }.bind({i: i}), 0)
    console.log('o',this.i)
  }
}*/

a();