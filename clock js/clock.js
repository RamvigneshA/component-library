const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const seconds = document.querySelector(".seconds");
function setDate() {
 const now = new Date();

 const second = now.getSeconds();
 const minute = now.getMinutes();
 const hour = now.getHours();

 const secondDeg = ((second/60)*360)+90;
 const minutedeg =((minute/60)*360)+90;
 const hourdeg   = ((hour/24)*360)+90;

 seconds.style.transform = `rotate(${secondDeg}deg)`
 console.log(minute);
 
 minutes.style.transform = `rotate(${minutedeg}deg)`

 hours.style.transform = `rotate(${hourdeg}deg)`
 
}
setInterval(setDate,1000);