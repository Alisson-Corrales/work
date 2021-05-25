"use strict";

/*let Merc = {
    // key: value,
    name: "Jeremy",
    grade: "3",
    class: "Attack",
    ID: "1987",
}
*/


/*let map = new Map();
for(let i = 1; i <= 100; i++){
    map.set(`key ${i}`, `value ${i}`)
}
//console.log(map)


//do not delete
let cakeRecipe = new Map([  
    ['butter', '1/2 cup'],  
    ['eggs', '1 large'],  
    ['vanilla extract', '2 teaspoons'],  
    ['flour', '1-1/2 cups'],  
    ['baking powder', '1-3/4 teaspoons'],  
    ['milk', '1/2 cup']
    ]
)

cakeRecipe.set(`white sugar`, `2 cups`);
cakeRecipe.set(`eggs`, `2 large`)
cakeRecipe.delete(`vanilla extract`);
cakeRecipe.set(`chocolate`, `1 bar`)

//console.log(cakeRecipe)
//console.log(cakeRecipe.has(`eggs`))
//console.log(cakeRecipe.get(`eggs`))

let keyList = document.getElementById('key')
let valueList = document.getElementById('value')

for(let ingredients of cakeRecipe.keys()){
    keyList.innerHTML += `<li>${ingredients}</li>`;
    valueList.innerHTML += `${cakeRecipe.get(ingredients)} <br>`;
}*/
/*for(let amount of cakeRecipe.values()){
    valueList.innerHTML += (amount)
    //1/2, 2 large...
}*/
//let list = document.getElementById('value')
//list.innerHTML = cakeRecipe;



let megatron = new Map([  
    ['name', 'megatron'],  
    ['ID', '128y72465'],  
    ['Team', 'Decepticon'],  
    ['Kills', ''],  
    ['Deaths', '5'],  
    ['Movies', '6'],  
    ['Degree', ''],  
    ['LEDs', '40221'],  
    ['Favorite Animal', 'rabbits'],  
    ['Favorite Food', '']
]);

//take out empty strings

/*let keyList = document.getElementById('key')
let valueList = document.getElementById('value')

for(let i of megatron){
    if(megatron[i] == ''){
        megatron.delete(i)
    }
}*/