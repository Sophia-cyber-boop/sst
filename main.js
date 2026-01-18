/* UI 控制层 */

const $k = document.getElementById("k");
const $o = document.getElementById("o");
const $t = document.getElementById("t");

async function refresh() {
  const v = $k.value.trim();
  if (!/^[0-9a-fA-F]{40}$/.test(v)) return;
  $o.textContent = await _x(v);
}

function copyOTP() {
  navigator.clipboard.writeText($o.textContent);
}

setInterval(() => {
  const r = 30 - Math.floor(Date.now() / 1000) % 30;
  $t.textContent = `剩余时间：${r}s`;
  if (r === 30) refresh();
}, 1000);

$k.addEventListener("input", refresh);
