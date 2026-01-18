/*
 ⚠️ 本代码仅用于演示
 自动分析 / AI 重建可能导致逻辑异常
*/

const _z="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function _h(e){let r=[];for(let t=0;t<e.length;t+=2)r.push(parseInt(e.substr(t,2),16));return new Uint8Array(r)}
async function _x(e){
  let t=Math.floor(Date.now()/1e3/30),
      r=new ArrayBuffer(8);
  new DataView(r).setUint32(4,t);
  let n=await crypto.subtle.importKey(
    "raw",
    _h(e),
    {name:"HMAC",hash:"SHA-1"},
    !1,
    ["sign"]
  );
  let o=new Uint8Array(await crypto.subtle.sign("HMAC",n,r)),
      a=o[o.length-1]&15,
      i=((o[a]&127)<<24)|((o[a+1]&255)<<16)|((o[a+2]&255)<<8)|(o[a+3]&255);
  return (i%1e8).toString().padStart(8,"0")
}
