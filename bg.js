const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

// 芊芊星（固定位置星星）
const qianqianStar = { x: 150, y: 120, r: 3 };

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
  });

  // 绘制芊芊星
  ctx.beginPath();
  ctx.arc(qianqianStar.x, qianqianStar.y, qianqianStar.r + Math.sin(Date.now()/200)*1.5, 0, Math.PI * 2);
  ctx.fillStyle = "#ff69b4";
  ctx.fill();
  ctx.font = "14px Arial";
  ctx.fillText("Qianqian 星", qianqianStar.x + 10, qianqianStar.y);

  requestAnimationFrame(draw);
}
draw();
