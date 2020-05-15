let cartName = [];
let cartPrice = [];



function addToCart(name,price){

	cartName.push(name);
	cartPrice.push(price);
}



function printCart(){
let total = 0;

for(let i = 0; i < cartPrice.length; i++ ){
 total += cartPrice[i];

}


let cart = document.getElementById("cartNames");

 cart.innerText= cartName.toString();
 
 let prices = document.getElementById("cartPrices");

prices.innerText= cartPrice.toString();




let finalCartPrice = document.getElementById("finalCart");
finalCartPrice.innerHTML = "Total: " + total;



}


