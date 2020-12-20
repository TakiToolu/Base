/*
function readFile(pathname){
  let suffixREG=/\.([0-9a-zA-Z]+)/,
      suffix=suffixREG.test(pathname)?suffixREG.exec(pathname)[1]:'',
      encoding='utf8';
  /^(PNG|GIF|JPG|JPEG|WEP|BMP|ICO|MP#|SVG|MP4|WAV|OGG|M3U8)$/i.test(suffix)?encoding=null:null;
  return new Promise((resolve,reject)=>{
    fs.readFile(pathname,encoding,(err,result)=>{
      if(err!==null){
       reject(err);
       return ;
      }
      resolve(result);

    })
  })
}
//其他模块引入
let {readFile}= require('./fs.js');
readFile('./a.txt').then((result)=>{
  console.log(result);
}).catch((reason)=>{
  console.log(reason)
})

//获取当前模块所在绝对路径
console.log(__dirname)*/

//封装完整fs模块
let fs=require('fs');
let path=require('path'),
  exportsOBJ={};
//根据后缀名 返回编码格式：UTF8、NULL
function suffixHandle(pathname){
  let suffixREG=/\.([0-9a-zA-Z]+)/,
    suffix=suffixREG.test(pathname)?suffixREG.exec(pathname)[1]:'',
    encoding='utf8';
  /^(PNG|GIF|JPG|JPEG|WEP|BMP|ICO|MP#|SVG|MP4|WAV|OGG|M3U8)$/i.test(suffix)?encoding=null:null;
}

['readFile','readdir','mkdir','rmdir','unlink'].forEach(item=>{
  exportsOBJ[item]=function anonymous(pathname){
    pathname=path.resolve(pathname);
    return new Promise((resolve,reject)=>{
      let encoding=sufixHandle(pathname);

    callback=(err,result)=>{
        if(err!==null){
          reject(err);
          return ;
        }
        resolve(result);
      }
      if(item!=='readFile'){
        encoding=callback;
        callback=null;
      }
      fs[item](pathname,encoding,callback);
    })
  }
})

  ['writeFile','appendFile'].forEach(item=>{
  exportsOBJ[item]=function anonymous(pathname,content){
    pathname=path.resolve(pathname);
    content!==null&&typeof content=='object'?content=JSON.stringify(content):null;
    typeof content!=='string'?content+='':null;
    return new Promise((resolve,reject)=>{
      let encoding=sufixHandle(pathname);
      callback=(err,result)=>{
        if(err!==null){
          reject(err);
          return ;
        }
        resolve(result);
      }

      fs[item](pathname,content,encoding,callback);
    })
  }
})

exportsOBJ['copyFile']=function anonymous(pathname1,pathname2){
  pathname1=path.reslove(pathname1);
  pathname2=path.reslove(pathname2);
  return new Promise((resolve,reject)=>{
    fs['copyFile'](pathname,encoding,(err,result)=>{
      if(err!==null){
        reject(err);
        return ;
      }
      resolve(result);

    })
  })
}
module.exports=exportsOBJ;