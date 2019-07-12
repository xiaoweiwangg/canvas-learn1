let canvas = $("canvas")[0];
let c = canvas.getContext("2d")
canvas.height = $(window).height()
let cw = $(window).width()
let ch = $(window).height()
canvas.width = $(window).width()
canvas.style.display = "block"
c.lineWidth = 1.5;
//canvas绘制图片
// let img=new Image();
// img.src="../1.jpg";
// img.onload=()=>{
//   ratio = img.width / img.height;//计算比率 保持图片比率不变
//   c.drawImage(img, 200, 200, 250, 250/ratio);
//   console.log(ratio);
// }
//canvas动画
let img = new Image()
img.src = "../2.png";
img.onload = () => {
  //实现动画控制
  let d = 6;
  let ds = 0;
  $(window).on("keydown", (e) => {
    switch (e.which) {
      case 38://上
        d = 2; ds = 1; break;
      case 40://下
        d = 6; ds = 2; break;
      case 37://左
        d = 0; ds = 3; break;
      case 39://右
        d = 4; ds = 4; break;
    }
  })
  let i = -1;
  let sy = 1;
  let sd = 4;
  let sx = 1;
  let t = setInterval(() => {
    c.clearRect(0, 0, cw, ch);//清除上次缓存的动画
    i++;
    switch (ds) {
      case 2: sy += sd; break;
      case 3: sx -= sd; break;
      case 1: sy -= sd; break;
      case 4: sx += sd; break;
    }
    if (sy < -68) { sy = -68 }
    if (sy > ch - 138) { sy = ch - 138 } 
    if (sx < -68) { sx = -68 }
    if (sx > cw - 138) { sx = cw - 138 }
    if (i >= 2048 / 256) { i = 0 }
    c.drawImage(img, i * 256, d * 256, 256, 256, sx, sy, 200, 200);
  }, 1000 / 10);
}