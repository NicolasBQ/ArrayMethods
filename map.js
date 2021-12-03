const items = [
    {name:'Burguer', price: 399},
    {name:'Pizza', price:400},
    {name:'IceCream', price:300}
]
//Array Map//
//I want a new array containing new copies, or changes, of each array element//
const halfPricePizza = items.map(item => {
    return item.name === 'Pizza' ? {...item, price: item.price / 2} : item;
})

console.log(halfPricePizza);
//Without Array Map//
let hPPizza = [];

for(let i = 0; i < items.length; i++) {
    if(items[i].name === 'Pizza') {
        hPPizza.push( {
            ...items[i],
            price: items[i].price / 2,
        })
    } else {
        hPPizza.push(items[i]);
    }
}

console.log(hPPizza)