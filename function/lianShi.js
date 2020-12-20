const LazyMan=function(name){
  console.log('Hi I am ',name);
  let tempt=0;
  class F{
    eat(food){
          setTimeout(()=>{
            console.log('一层eat',food);
            setTimeout(()=>{
              console.log('I am eating',food);
            },tempt)
          },0)
      return this;
    }
    sleep(t){
      setTimeout(()=>{
        console.log('一层sleep',t);
        tempt+=t*1000;
        setTimeout(()=>{
          console.log(`等待了${t}秒。。。`);
        },tempt)

      },0)
      return this;
    }
    sleepFirst(t){
      Promise.resolve().then(()=>{
        console.log('一层sleepFirst')
        tempt+=t*1000;
        setTimeout(()=>{
          console.log(`等待了${t}秒。。。`);
        },t*1000)
      })
      return this;
    }
  }
  return new F;
}
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(1).sleep('2');
// LazyMan('Tony').sleep(1).eat('lunch').sleepFirst(2).eat('dinner').sleep(3).eat('end');