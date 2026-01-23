const $k = document.getElementById("k");
const $o = document.getElementById("o");
const $t = document.getElementById("t");
const $toggle = document.getElementById("toggle");
const $toast = document.getElementById("toast");

async function refresh() {
  const v = $k.value.trim();
  if (!/^[0-9a-fA-F]{40}$/.test(v)) return;

  $o.classList.add("flash");
  $o.textContent = await _x(v);

  setTimeout(() => {
    $o.classList.remove("flash");
  }, 250);
}

function copyOTP() {
  navigator.clipboard.writeText($o.textContent);
  $toast.classList.add("show");
  setTimeout(() => {
    $toast.classList.remove("show");
  }, 800);
}

setInterval(() => {
  const r = 30 - Math.floor(Date.now() / 1000) % 30;
  $t.textContent = `剩余时间：${r}s`;
  if (r === 30) refresh();
}, 1000);

$k.addEventListener("input", refresh);

// 显示 / 隐藏密钥
$toggle.addEventListener("click", () => {
  const hidden = $k.type === "password";
  $k.type = hidden ? "text" : "password";
  $toggle.textContent = hidden ? "🙈" : "👁️";
});

// 禁止右键（心理威慑）
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  alert("⚠️ 本页面受版权保护");
});
