"use strict";

class User{
    constructor(firstName, lastName, id,   ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;

    }
}


let userList = [("unga", "bunga", 999), ("numa", "numa", 1000)];
let userId = 1001;

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    
    if(firstName != "" && lastName != ""){
        let user = new User (firstName, lastName, userId);
        userId++;
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
}

function print(){
    let printSpace = document.getElementById("printSpace");

    printSpace.innerHTML = "";
    for(let i = 0; i < userList.length; i++){
        printSpace.innerHTML += `<div>${userList[i].id} ${userList[i].firstName} ${userList[i].lastName}</div>`;
    }
}




