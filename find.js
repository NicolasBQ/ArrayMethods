const items = [
    {name:'Burguer', price: 399, promo: false},
    {name:'Pizza', price:400, promo:true},
    {name:'IceCream', price:300, promo:false} 
]
//Array Find//
//I want to find a particular element in my array//
let found = items.find(item => item.name === 'IceCream');

console.log(found);
//Without Find//
let result;

for(let i = 0; i < items.length; i++) {
    if(items[i].name === 'IceCream') {
        result = items[i];
        break;
    }
}

console.log(result);
