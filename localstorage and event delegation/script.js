const addItemButton = document.getElementById('addItemButton');

const ul = document.getElementById('ul');
const textInput = document.querySelector('input');

const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function addItem(event){
    if(!textInput.value) return;
    event.preventDefault();
    const tkey = crypto.randomUUID();

    const item ={
        text: textInput.value,
        tkey,
       
    }
    
    items.push(item);
    itemList(items,ul);
    localStorage.setItem('items',JSON.stringify(items));
    textInput.value="";

}

function itemList(sample=[],ulelement){
    ulelement.innerHTML= sample.map(item=> `<div class="me" key="${item.tkey}"><li>${item.text}</li><span>x</span></div>`).join('');

}

function removeItem(event){

    if(event.target.tagName === 'SPAN'){
        const div = event.target.parentElement;
        const tkey = div.getAttribute('key');
        const index = items.findIndex(item => item.tkey === tkey);
        items.splice(index,1);
        itemList(items,ul);
        localStorage.setItem('items',JSON.stringify(items));
        // ul.removeChild(div);    
    
    }
}
addItemButton.addEventListener('submit',addItem);
addItemButton.addEventListener('reload', itemList(items,ul));
ul.addEventListener('click',removeItem);
// localStorage.clear();