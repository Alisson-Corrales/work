"use strict";

let testObj = {
    name: 'Jim',
    age: 40,
    city: "South"
}

let testJSON = JSON.stringify(testObj);
//first is the name of the file we are saving to
//second is the string we're saving

localStorage.setItem("testStorage", testJSON)