"use script";


let main = document.getElementsByTagName("body");
main = main[0]
console.log(main);


function toggler(){
    if(text.style.display == "none"){
        text.style.display = "block";
    }else{
        text.style.display = "none";
    }
}

toggle.addEventListener("click", toggler);

