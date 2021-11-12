


var quantity = 1;

//  the below function for to decrease quantity  and it displayed quantity 

document.getElementById("minus").addEventListener("click",minusfun);
function minusfun(){
    if(quantity >1){
        quantity--;
        document.getElementById("quan").value = quantity;
    }
   
}

// the below function for to increase quantity it displayed quantity

document.getElementById("plus").addEventListener("click",plusfun);
function plusfun(){
    quantity++
    document.getElementById("quan").value = quantity;
}

/* the below function is used to add product to cart */


// here   "cartData" is the local storage 

var cartList = JSON.parse(localStorage.getItem("cartData")) || [];

document.getElementById("addToCartDiv").addEventListener("click",addProductToCart)
function addProductToCart(){
    var name = document.getElementById("productName").textContent;
    var weight = document.getElementById("productWeight").value;
    var price = document.getElementById("productPrice").textContent;
    var quantity = document.getElementById("quan").value;
       
    var cartItems = 
        {
            p_Name : name,
            p_Weight: weight,
            p_Price : price,
            p_Quantity : quantity,
        }
    
    cartList.push(cartItems);
    localStorage.setItem("cartData",JSON.stringify(cartList));
}

/* the below function used for hover mouse function */

// document.getElementById("realDealKnowMore").addEventListener





var data = JSON.parse(localStorage.getItem("nextPageData"));

document.getElementById("productName").textContent = data.productName;
document.getElementById("productPrice").textContent = data.productPrice;
document.getElementById("emiBoxSpan").textContent =   data.productPrice / 4;