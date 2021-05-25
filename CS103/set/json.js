"use strict";


/*let cakeRecipe = new Map([  
    ['butter', '1/2 cup'],  
    ['eggs', '1 large'],  
    ['vanilla extract', '2 teaspoons'],  
    ['flour', '1-1/2 cups'],  
    ['baking powder', '1-3/4 teaspoons'],  
    ['milk', '1/2 cup']
]);

//turns it into a object
cakeRecipe = Object.fromEntries(cakeRecipe)

//turns it into a string
cakeRecipe = JSON.stringify(cakeRecipe)

//turns it back into a object
cakeRecipe = JSON.parse(cakeRecipe)

//makes it into a map
let map = new Map(Object.entries(cakeRecipe));

console.table(map)*/

let date = new Date("2021-12-31T12:00:00:00.000")

let str = `{"title":"FBLA Competitions", "date": "${date}"}`

//function(key,value) is called a reviver and is used to reinitialize objects
let obj = JSON.parse(str, function(key,value){
    if(key == 'date'){
        return new Date(value);
    }else{
        return value
    }
});

console.log(obj)
//console.log(obj.date.getTime())

