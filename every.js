const items = [
    {name:'Burguer', price: 399, promo: false},
    {name:'Pizza', price:400, promo:true},
    {name:'IceCream', price:300, promo:false} 
]
//Array Every//
//I wanto to check if every value in my array meets my condition - a yes/no answer.//
let condition = items.every(item => item.promo);
console.log(condition);
//Without Array Every//
let result = true;

for(let i = 0; i < items.length; i++){
    if(!items[i].promo) {
        result = false;
        break;
    }
}