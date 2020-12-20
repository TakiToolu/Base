var o=document.getElementById('ul');
o.onclick=function(ev){
  var ev=ev||window.e;
  var target=ev.target||ev.srcElement;
  if(target.nodeName.toLocaleString()=='li'){
    alert(e.target.id)
  }
}


document.addEventListener('click',e=>{
  if(e.target&&e.target.nodeName.toLocaleString()=='li'){
    alert(e.target.id);
  }
})