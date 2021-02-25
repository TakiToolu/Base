//在页面中循环插入数据，使用文档碎片集中处理，框架使用模板

//原生js
let ul=document.getElementById('xuan');
const fragment=document.createDocumentFragment();
for(let i=0;i<data.length;i++){
  const li=document.createElement('li');
  li.innerText=data[i].val;
  fragment.appendChild(li);
}
ul.appendChild(fragment);

//vue


//react
