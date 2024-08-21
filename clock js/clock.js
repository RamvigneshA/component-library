const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const seconds = document.querySelector(".seconds");
function setDate() {
 const now = new Date();

 const second = now.getSeconds();
 const minute = now.getMinutes();
 const hour = now.getHours();
console.log(hour);
 const secondDeg = ((second/60)*360);
 const minutedeg =((minute/60)*360);
 const hourdeg   = ((hour/24)*720);

 seconds.style.transform = `rotate(${secondDeg}deg)`
 
 minutes.style.transform = `rotate(${minutedeg}deg)`

 hours.style.transform = `rotate(${hourdeg}deg)`
 
}
setInterval(setDate,1000);