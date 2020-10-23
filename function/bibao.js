function foo(){
  var a=10;
  function bar(){
    a=a*2;
    console.log(a);
  }
  return bar;
}
var aa=foo();
aa();
aa();
aa();
