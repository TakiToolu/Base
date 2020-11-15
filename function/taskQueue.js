//实现任务队列。支持如下链式调用

new Queue()
  .task(1000, () => {
    console.log(1);
  })
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();

//全部变量实现

class Queue {
  construcotr() {
    this.arr = []
    this.time = 0
  }
  task(ms, f) {
    this.arr.push([ms, f])
    return this
  }
  start() {
    while(this.arr.length) {
      const [ms, f] = this.arr.shift()
      this.time += ms
      setTimeout(f, this.time)
    }
    this.time = 0
  }}