// 调用栈
function func() {
  console.log("func");
}

// 消息队列
setTimeout(() => {
  console.log("setTimeout");
}, 0)


var p = new Promise((resolve, reject) => {
  console.log("Promise");
  resolve()
})

// 微任务
p.then(() => {
  console.log("then");
})

func()
/**
 * 执行结果
 Promise
 func
 then
 setTimeout
 */