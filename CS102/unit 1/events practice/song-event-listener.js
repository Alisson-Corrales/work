"use strict";

let song = [];


/////////////////////////

function lyricBeep(){
    sessionStorage.push("beep")
}

let button = document.createElement("button")
button.textContent = "beep" //gives button textContent
button.addEventListener("click", beep); //gives a "onclick" thing to the button
document.appendChild(button);

////////////////////////////////

function lyricBoop(){
    sessionStorage.push("boop")
}

button = document.createElement("button");
button.textContent = "boop"; //gives button textContent
button.addEventListener("click", boop); //gives a "onclick" thing to the button
document.appendChild(button);

///////////////////////////////

function lyricBop(){
    sessionStorage.push("bop")
}

button = document.createElement("button");
button.textContent = "bop"; //gives button textContent
button.addEventListener("click", bop); //gives a "onclick" thing to the button
document.appendChild(button);

///////////////////////////

function print(){
    let div = document.createElement("div");
    div.textContent= song.join("");
    main.appendChild(div);
    song = []
}

button = document.createElement("button");
button.textContent = "print"; //gives button textContent
button.addEventListener("click", print); //gives a "onclick" thing to the button
document.appendChild(button);








