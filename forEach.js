const items = [
    {name:'Burguer', price: 399},
    {name:'Pizza', price:400},
    {name:'IceCream', price:300}
]
//Array ForEach//
//I want to access my array values one-by-one so I can do something with them//
const app = document.querySelector('.app');
items.forEach(item => {
    app.innerHTML += `
                   <li>
                    ${item.name} price ${item.price}
                   </li> 
    `
})
//Without forEach//
for(let i = 0; i < items.length; i++) {
    app.innerHTML += `
                  <li>
                    ${items[i].name} price ${items[i].price}
                  </li>  
    `
}