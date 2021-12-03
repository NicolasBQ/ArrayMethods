const items = [
    {name:'Burguer', price: 399},
    {name:'Pizza', price:400},
    {name:'IceCream', price:300}
]
//Array Filter//
//I want a new array containing just the items I need"
const expensiveItems = items.filter(item => item.price > 300);

console.log(expensiveItems);
//Without Array Filter//
const expensiveArr = [];

for(let i = 0; i < items.length; i++) {
    if(items[i].price > 300) {
        expensiveArr.push(items[i]);
    }
}

console.log(expensiveArr);