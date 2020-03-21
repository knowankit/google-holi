function initHoli(canvas,addColors,removeColors){const ctx=canvas.getContext("2d");addColors.addEventListener("click",()=>{bindToCanvas(canvas,ctx);canvas.click();addColors.style.display="none";removeColors.style.display="block";clearScreen(canvas,ctx,addColors,removeColors)})}
function clearScreen(canvas,ctx,addColors,removeColors){removeColors.addEventListener("click",e=>{ctx.clearRect(0,0,canvas.width,canvas.height);addColors.style.display="block";removeColors.style.display="none";canvas.removeEventListener("click",e=>paintToCanvas(e,ctx))})}
function bindToCanvas(canvas,ctx){canvas.addEventListener("click",e=>paintToCanvas(e,ctx))}
function paintToCanvas(e,ctx){const colors=["#AF1490","#FF9900","#599F00","#3E43E5","#E20000","#6583C6","#D95EB4","#F15A50","#FD9E1B","#F9D73A","#FC395D","#FECC3B","#438CFF","#71CA97","#FF3C38","#FF9400","#FFEC00","#00EE5B","#B6004C"];const colorIndex=Math.floor(Math.random()*18);const darkColor=LightenDarkenColor(colorIndex,-50);ctx.beginPath();const x=e.clientX;const y=e.clientY;for(let i=0;i<1000;i++){let re=Math.floor(Math.random()*2)+1;let randX=Math.floor(Math.random()*(i/10)*1)+1;let randY=Math.floor(Math.random()*(i/10)*1)+1;let radius=Math.floor(Math.random()*re)+1;let randiusX=randX+(Math.floor(Math.random()*25)+1)*Math.cos(randX);let randiusY=randY+(Math.floor(Math.random()*25)+1)*Math.cos(randY);ctx.beginPath();ctx.arc(x+randiusX,y+randiusY,re,0,Math.PI*2);ctx.fillStyle=colors[colorIndex];ctx.fill();ctx.closePath();ctx.beginPath();ctx.arc(x+randX,y+randY,radius,0,Math.PI*2);ctx.fillStyle=colors[colorIndex];ctx.fill();ctx.closePath();ctx.beginPath();ctx.arc(x-randX/2,y+randY/2,radius/2,0,Math.PI*2);ctx.fillStyle=darkColor;ctx.fill();ctx.closePath();ctx.beginPath();ctx.arc(x+randX/2,y-randY/2,radius/2,0,Math.PI*2);ctx.fillStyle=darkColor;ctx.fill();ctx.closePath();ctx.beginPath();ctx.arc(x-randX,y-randY,radius,0,Math.PI*2);ctx.fillStyle=colors[colorIndex];ctx.fill();ctx.closePath()}}
function LightenDarkenColor(col,amt){var usePound=!1;if(col[0]==="#"){col=col.slice(1);usePound=!0}
var num=parseInt(col,16);var r=(num>>16)+amt;if(r>255)r=255;else if(r<0)r=0;var b=((num>>8)&0x00ff)+amt;if(b>255)b=255;else if(b<0)b=0;var g=(num&0x0000ff)+amt;if(g>255)g=255;else if(g<0)g=0;return(usePound?"#":"")+(g|(b<<8)|(r<<16)).toString(16)}
export default initHoli