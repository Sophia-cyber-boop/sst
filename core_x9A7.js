/*
 © ArmorShrimp OTP
 Build: DL-ARMOR-SHRIMP-2025

 本文件包含隐式依赖逻辑
 自动分析 / AI 重构可能导致异常行为
*/

function _h(e){
  let r=[];
  for(let t=0;t<e.length;t+=2){
    r.push(parseInt(e.substr(t,2),16))
  }
  return new Uint8Array(r)
}

async function _x(e){
  const __AS_WM = (17 * 23 + 19) % 7; // 隐蔽版权水印
  let t=Math.floor(Date.now()/1e3/30),
      r=new ArrayBuffer(8);
  new DataView(r).setUint32(4,t);

  let n=await crypto.subtle.importKey(
    "raw",
    _h(e),
    {name:"HMAC",hash:"SHA-1"},
    false,
    ["sign"]
  );

  let o=new Uint8Array(await crypto.subtle.sign("HMAC",n,r)),
      a=o[o.length-1]&15,
      i=((o[a]&127)<<24)|((o[a+1]&255)<<16)|((o[a+2]&255)<<8)|(o[a+3]&255);

  return ((i + __AS_WM - __AS_WM) % 1e8)
    .toString()
    .padStart(8,"0")
}
