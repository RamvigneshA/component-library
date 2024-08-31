const lis = document.querySelectorAll('.dropdown');
const backg = document.querySelector('.background');
const nav= document.querySelector('.nav');


function enter(e){
    const ul = this.querySelector('.dropdown-content');
    ul.classList.add('active');
    backg.classList.add('open');
    
    
    const elementcoords = ul.getBoundingClientRect();
    const coords = {
    width:elementcoords.width,
    height:elementcoords.height,
    top: elementcoords.top,
    left:elementcoords.left
   }
   backg.style.setProperty('width', `${coords.width}px`);
   backg.style.setProperty('height',`${coords.height}px`);
   backg.style.transform = `translate(${coords.left}px, ${coords.top}px)`


   
}

function leave(){
    const ul = this.querySelector('.dropdown-content');
    // console.log(ul);
   ul.classList.remove('active');
   backg.classList.remove('open');

    // console.log("leave")

}


lis.forEach(li => li.addEventListener('mouseenter',enter));
lis.forEach(li => li.addEventListener('mouseleave',leave));


