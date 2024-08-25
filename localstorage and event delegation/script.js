const addItemButton = document.getElementById('addItemButton');
const ul = document.getElementById('ul');
const textInput = document.querySelector('input');

const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function addItem(event){
    event.preventDefault();
    const item ={
        text: textInput.value
    }
    
    items.push(item);
    itemList(items,ul);
    localStorage.setItem('items',JSON.stringify(items));
    textInput.value="";

}


function itemList(sample=[],ulelement){
    ulelement.innerHTML= sample.map(item=> `<li>${item.text}</li>`).join('');

}
addItemButton.addEventListener('submit',addItem);
addItemButton.addEventListener('reload', itemList(items,ul));