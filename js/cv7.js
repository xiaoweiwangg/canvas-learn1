let canvas = $("canvas")[0];
let c = canvas.getContext("2d")
canvas.height = $(window).height()
canvas.width = $(window).width()
c.lineWidth = 1.5;
c.font="70px '宋体'"//字体样式
c.textAlign="center"//字体对齐
c.strokeStyle='red';

c.strokeText("hello canvas! 我要做个温柔的程序猿 ", $(window).width() / 2, $(window).height() / 2);
// c.fillText("hello canvas! 我要做个温柔的程序猿 ", $(window).width() / 2, $(window).height()/2);
