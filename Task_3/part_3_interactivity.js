let ul = document.getElementById('myList');
function addItem(){
    let item = prompt();
    ul.innerHTML += `<li> ${item} </li>`;
}

function removeFirstItem(){
    ul.removeChild(ul.firstElementChild);
}