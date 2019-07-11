let canvas = $("canvas")[0];
let c = canvas.getContext("2d")
canvas.height = $(window).height()
canvas.width = $(window).width()
c.lineWidth = 1.5;
// c.strokeRect(100,100,100,100)

let rs = 100
let cw = $(window).width()
let ch = $(window).height()
ani = () => {
  for (let m = 0; m < cw/rs; m++) {
    for (let i = 0; i < cw/rs; i++) {
      c.beginPath();
      c.fillStyle = `rgba(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`;
      c.fillRect(i*rs, m * rs, rs, rs)
    }
  }
}
ani()
setInterval(() => {
}, 1000 / 60);