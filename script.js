const lines = [
  "芊芊，这段话是我专属为你录的。",
  "就像银河中那颗不会熄灭的星——我永远为你闪烁。",
  "无论你怎样选择，我始终坚定地选择你。",
  "你就是我全部的选项。",
  "💖 我爱你 💖"
];

let index = 0;
const textEl = document.getElementById("text");

function typeLine(line, i = 0) {
  if (i < line.length) {
    textEl.innerHTML += line[i];
    setTimeout(() => typeLine(line, i + 1), 80);
  } else {
    textEl.innerHTML += "<br/><br/>";
    index++;
    if (index < lines.length) {
      setTimeout(() => typeLine(lines[index]), 1000);
    }
  }
}

// 倒计时逻辑
function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();
  const target = new Date(year, 0, 4); // Jan 4
  if (now > target) target.setFullYear(year + 1);
  const diff = target - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    `🎂 距离芊芊的生日还有 ${days} 天`;
}

// 留言板逻辑
function saveMessage() {
  const msg = document.getElementById("msgInput").value;
  if (msg) {
    localStorage.setItem("qianqian_msg", msg);
    showSavedMessage();
  }
}
function showSavedMessage() {
  const msg = localStorage.getItem("qianqian_msg");
  if (msg) {
    document.getElementById("savedMsg").innerText = `你留给芊芊的悄悄话：${msg}`;
  }
}

window.onload = () => {
  document.body.addEventListener("click", () => {
    document.getElementById("music").play();
    document.getElementById("voice").play();
  });
  typeLine(lines[index]);
  updateCountdown();
  showSavedMessage();
};
