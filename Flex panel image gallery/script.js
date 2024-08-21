const panels = document.querySelectorAll('.panel');
function toggle(){
     this.classList.toggle('open');
}
function introduce(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('active');
    }
}
panels.forEach(panel=>panel.addEventListener('click',toggle));
panels.forEach(panel=>panel.addEventListener('transitionend',introduce));
