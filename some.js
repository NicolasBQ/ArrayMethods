const items = [
    {name:'Burguer', price: 399, promo: false},
    {name:'Pizza', price:400, promo:true},
    {name:'IceCream', price:300, promo:false} 
]
//Array Some//
//I want to check if any value(s) in my array meets my condition - a yes/no answer//
const condition = items.some(item => item.promo);
const total = condition ? 500 : items.reduce((prev, next) => prev + next.price,0)

console.log(total);
//Without Array some//
let result = false;

for(let i = 0; i < items.length; i++) {
    if(items[i].promo) {
        result = true;
        break;
    }
}