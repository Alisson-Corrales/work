let visitors = ['john', 'jim', 'jane','jake', 'jill', 'robert', 'john', 'jill', 'jane', 'jim', 'jim', 'jill'];

let set = new Set (visitors)

console.log(set.size)
for(let visitors of set){
    console.log(visitors)
}

