const body = document.querySelector("body");
const text = document.querySelector(".txt");

 


function move(e) {
const width = body.offsetWidth;
const height = body.offsetHeight;
let x = e.offsetX;
let y = e.offsetY;
if(this!==e.target){
    x = x+(e.target.offsetLeft);
    y = y+(e.target.offsetTop);
    
}
finalX = (x/width)*200;
finalY = (y/height)*200;
x = (finalX-100);
y = (finalY-100);
console.log(x,y);
text.style.textShadow = `${x}px ${y}px hotpink, ${x}px ${-y}px green, ${-x}px ${y}px pink, ${-x}px ${-y}px purple, ${y}px ${x}px orange, ${y}px ${-x}px yellow, ${-y}px ${x}px cyan, ${-y}px ${-x}px blue`;
}

body.addEventListener("mousemove", move);