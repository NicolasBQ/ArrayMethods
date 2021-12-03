const items = [
    {name:'Burguer', price: 399},
    {name:'Pizza', price:400},
    {name:'IceCream', price:300}
]
//Array Reduce//
//I want to reduce my Array just to a single value//
const reduced = [1,2,3,4,5].reduce((prev, next) => {
    console.log(prev, next);
    return prev + next
},0)

console.log(reduced);

const prices = items.reduce((prev, next) => prev + next.price, 0)

console.log(prices);

const prices2 = items.map(item => item.price).reduce((prev, next) => prev + next);

console.log(prices2);
//Without Array Reduce//
let red = 0;
for(let i = 0; i < items.length; i++) {
    red = red + items[i].price;
}

console.log(red);