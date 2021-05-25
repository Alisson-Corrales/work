'use strict';


let day = [
['schoool', 8],
['food', 1],
['driving', 2],
['free time', 6],
['sleeping', 7]
]

//3 is the row (index)
//0 is the amount of rows being replaces (that is to say none)
day.splice(3, 0 , ['study', 2]);
//on index 4, 1, it is decreased by 2
day[4][1]-=2;

//day.splice(5, 0, ['programming', 1])
//day[6][1]-=1;


//i in day is basically 'let i = 0; i < day.length; i++'
for(let i in day){
    //i grabs every item in day, 1 grabs every time
    let percent = Math.round(day[i][1]/24*100);
    day[i][2] = percent + '%';
}


console.table(day)

/* day[0][0] // 'school'
day[1][1] // 1
day[3][0] //'free time'
day[4][1] // 7 */