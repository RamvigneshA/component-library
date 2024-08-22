const press = [];
const scode = ['ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace']
const heads = document.querySelectorAll('h1');



function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}


function secret(e){
    press.push(e.key);
    console.log(press);
    const newarr = press.slice(-scode.length)
    if(JSON.stringify(scode) === JSON.stringify(newarr)){
        const header = [...heads];
        header.map(heed => {
            heed.innerText="hacked!"
        })   

    }
}

const debouncedKeyUp = debounce(secret, 100); // Debounce with 50ms delay

window.addEventListener('keyup', debouncedKeyUp);






















