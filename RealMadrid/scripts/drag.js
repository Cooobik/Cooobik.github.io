"use strict";
function allowDrop(event) {
   event.target.style.color = 'blue';
   event.preventDefault();
}

function dragImg(event) {
   event.dataTransfer.setData("text", event.target.id);
   event.target.style.color = 'green';
}

function drop(event) {
   event.preventDefault();
    var data = event.dataTransfer.getData("text");
   event.target.appendChild(document.getElementById(data));
    
}
            