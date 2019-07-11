//1.
let canvas = $("canvas")[0]
//2.
let c = canvas.getContext("2d")
//3.
canvas.height = 500
canvas.width = 500
///4.绘制横线
c.strokeStyle="gold";
c.lineWith="4px";
let rh = 50;//单元格的宽高度
let ch = $(canvas).height()//容器的高度
for (let i = 0; i < ch / rh; i++) {
  c.moveTo(0, i * rh);
  c.lineTo(ch, i * rh)
  c.moveTo( i * rh,0);
  c.lineTo(i*rh,ch)
  c.closePath();
  c.fillStyle = 'green';
  c.fill();
  c.stroke()
}

