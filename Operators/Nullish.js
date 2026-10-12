let milk = null
var price = milk ?? 'Amul' //if the value of milk is null assign the value of price to Amul
//Nullish coalescing operator (??) is used to assign a default value when the left-hand side is null or undefined. In this case, since milk is null, price will be assigned the value 'Amul'.