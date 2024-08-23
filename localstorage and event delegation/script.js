const addItemButton = document.getElementById('addItemButton');
const ul = document.getElementById('ul');
const textInput = document.querySelector('input');

function addItem(event){
    if(textInput.value){
    event.preventDefault();
   
    const li= `<li>${textInput.value}</li>`;
    // const li = document.createElement('li');
    // li.innerText = textInput.value;
    ul.innerHTML += li; 
    textInput.value = '';
    }else{
    event.preventDefault();

    }
}

addItemButton.addEventListener('click',addItem);