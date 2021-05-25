"use strict";

let main = document.getElementsByTagName("body");
main = main[0]
console.log(main);

let divElement = document.createElement("div");

divElement.addEventListener("click", function(){
    alert("testing");
})

main.appendChild(divElement);

function testing(){
    alert(this);
}

function remove(){
    this.removeEventListener("click", testing);
}

main.addEventListener("click", testing);
main.addEventListener("click", remove);