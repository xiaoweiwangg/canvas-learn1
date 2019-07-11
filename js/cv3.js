let canvas = $("canvas")[0];
let c = canvas.getContext("2d")
canvas.height = 500
canvas.width = 600
//折线图类
class draw {
  constructor(data,ctx) {
    this.data = data;
    this.cw = 500;//canvas的宽
    this.ch = 600;//canvas的宽
    this.c=ctx;
    this.size = this.ch / this.data[0].yi.length;//宽度/天数
  }
  //创建假数据的静态方法
  static createdata() {
    let arr = []
    for (let i = 0; i < 31; i++) {
      arr.push(_.random(0, 100))
    }
    return arr;
  }
  //绘制方法
  dra() {
    this.c.strokeStyle = "pink";
    this.c.lineWidth=3;
    for (let m = 0; m < this.data[0].yi.length; m++) {
      this.c.lineTo((m)* this.size, (100-this.data[0].yi[m]) * 5)
    }
    this.c.stroke()
  }
}
let data = [
  { yi: draw.createdata() }
]
let d = new draw(data,c);
d.dra()





// let a = Array.from(Object.keys(data[0]))
// let av = Array.from(Object.values(data[0]))
// let b = ([...a, ...av])
// console.log(b);


