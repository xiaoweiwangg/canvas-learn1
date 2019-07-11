let canvas=$("canvas")[0];
let c=canvas.getContext("2d")
canvas.height=500
canvas.width=500
c.lineWidth=1.5;
let ts=50
let th = 500
let tw=500
for(let i=0;i<tw/ts;i++){
  c.beginPath()
  c.strokeStyle = `rgba(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`
  c.moveTo(0, i*ts);
  c.lineTo(tw,i*ts);
  c.stroke()
  c.beginPath()
  c.strokeStyle = `rgba(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`
  c.moveTo(i * ts,0);
  c.lineTo( i * ts, tw);
  c.stroke()
}
