"use strict";


/*let array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function desc(){
    //code goes here to change values
    return array
}
//deconstructs the array
//exact same thing as the top function
const desc2 = () => {
    //code goes here to change the values
    return array
}

let [a, b, c, d, e ,f, g, h, i, j, k] = desc2();
let line = [a, b, c, d, e ,f, g, h, i, j, k]
console.log(line) 
*/

let students = {
    names:{
        1:"Fiona",
        2:"Jermey",
        3:"Tavish",
        4:"Ludwig",
        5:"Jane",
    },
    grades:{
        1:98,
        2:78,
        3:68,
        4:88,
        5:8
    },
    id:{
        1:123,
        2:234,
        3:345,
        4:456,
        5:567
    },
}

//const {grades, id, names} = students;

const {id: studentIDs, ...theRest} = students;
console.log(studentIDs); //contains id obj
console.log(theRest); //contain the names and grade objs

//console.log(grades)
//console.log(id)
//console.log(names)

