var canvas = document.getElementById("analogClock");
var ctx = canvas.getContext("2d");

var hour;
var minute;

setInterval(function(){
  var time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  $("#hour").text(hour);
  $("#minute").text(minute);
  drawClock();
}, 200);

if(innerWidth < 425){
  $("canvas").prop("width", innerWidth*0.9);
  $("canvas").prop("height", innerWidth*0.9);
}

var raio = (ctx.canvas.width - 5)/2;
var clockX = ctx.canvas.width/2;
var clockY = ctx.canvas.height/2;

function drawClock(){
  ctx.clearRect(0,0,600,600);
  ctx.beginPath();
  ctx.arc(clockX,clockY, raio, 0, Math.PI*2, true);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#ecf0f1";
  ctx.stroke();

  //Hour Pointer
  ctx.beginPath();
  ctx.moveTo(clockX, clockY);
  ctx.lineTo(clockX - (Math.cos(Math.PI*hour/6 + Math.PI/2 + Math.PI*minute/360)*0.7*raio), clockY - (Math.sin(Math.PI*hour/6 + Math.PI/2 + Math.PI*minute/360)*0.7*raio));
  ctx.strokeStyle = "#ecf0f1";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.closePath();
  
  //Minute Pointer
  ctx.beginPath();
  ctx.moveTo(clockX, clockY);
  ctx.lineTo(clockX - (Math.cos(Math.PI*minute/30 + Math.PI/2 + Math.PI*minute/360)*0.9*raio), clockY - (Math.sin(Math.PI*minute/30 + Math.PI/2 + Math.PI*minute/360)*0.9*raio));
  ctx.strokeStyle = "#ecf0f1";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
};
