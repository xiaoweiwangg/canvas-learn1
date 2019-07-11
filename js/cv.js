//1.属性内设置宽高(style内设置快高会被拉伸)
//2.获取canvas元素
let canvas =$("canvas")[0]
//3.获取画布上下文
let c=canvas.getContext('2d');
//8.画笔样式(颜色)
c.strokeStyle='red';
//9.画笔粗细
c.lineWidth="3px";
//4.移动画笔至某个位置
c.moveTo(100, 100);
//5.绘制线条至
c.lineTo(200, 100);
c.lineTo(100, 200);
//7.自动闭合路径
c.closePath();
//11.填充样式(颜色)
c.fillStyle='green';
//10.填充
c.fill();
//6.绘制指令 (要在最后)
c.stroke();

















