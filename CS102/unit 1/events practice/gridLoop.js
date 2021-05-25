"use strict";

let main = document.getElementsByTagName("body");
main = main[0]
console.log(main);


//function handler(){
//    if(this.style.background == "pink"){
//        this.style.background = "white"
//    }else{
//        this.style.background = "pink"
//    }
//}

function handler(){
    if(this.style.background == "white"){
        this.style.background = "green";
    }
}

function hover(){
    if(this.style.background == "white" || this.style.background == "green"){
        this.style.background = "red";
    }
}

for(let i = 0; i < 9; i++){
    let flatCube = document.createElement("div")
    flatCube.addEventListener("click", handler);
    flatCube.addEventListener("mouseover", hover)
    main.appendChild(flatCube);
}