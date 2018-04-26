function changeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementsByClassName('logo')[0].style.backgroundColor = color;
}
setInterval('changeColor()', 2000);
document.getElementsByClassName('logo')[0].onmouseover = changeColor;

document.getElementsByClassName('to-do-list-add')[0].onclick = addNewElement;

function addNewElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementsByClassName('to-do-list-write')[0].value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('Вы должны что-нибудь написать!');
    } else {
        document.getElementsByClassName('list')[0].appendChild(li);
    }
    document.getElementsByClassName('to-do-list-write')[0].value = "";
    li.classList.add('to-do');
    li.onclick = strikeElement;
    function strikeElement() {
        this.classList.add('strike');
    }
}

document.getElementsByClassName('to-do-list-clear')[0].onclick = clearAllElements;

function clearAllElements() {
    var list = document.getElementsByClassName('list')[0];
    var allElements = document.getElementsByClassName('to-do');
    for (i = 0; i < allElements.length;) {
        list.removeChild(allElements[i]);
    }
}

