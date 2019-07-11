let canvas = $("canvas")[0];
let c = canvas.getContext("2d")
canvas.height = $(window).height()
canvas.width = $(window).width()
c.lineWidth = 1.5;
let data = [
  { name: "yi", xiaoliang: _.random(0, 100) },
  { name: "yi", xiaoliang: _.random(0, 100) },
  { name: "yi", xiaoliang: _.random(0, 100) },
  { name: "yi", xiaoliang: _.random(0, 100) },
  { name: "yi", xiaoliang: _.random(0, 100) },
  { name: "yi", xiaoliang: _.random(0, 100) }
]
let darrsum=data.map(x=>x.xiaoliang).reduce((t,i)=>t+i)
let arrdeg = data.map(x => parseFloat(((x.xiaoliang / darrsum) * 360).toFixed(2)))
//定义一个起始位置0
let start=0;
for(let i=0;i<arrdeg.length;i++){
  c.beginPath();
  c.moveTo(300, 300)
  c.fillStyle = `rgba(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`;
  c.arc(300, 300, 150, (start)* Math.PI / 180, (start+=arrdeg[i]) * Math.PI / 180)
  c.closePath()
  c.stroke();
  c.fill()
}

