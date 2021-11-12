var quantity = 1;

//  the below function for to decrease quantity  and it displayed quantity

document.getElementById("minus").addEventListener("click", minusfun);
function minusfun() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("quan").value = quantity;
  }
}

// the below function for to increase quantity it displayed quantity

document.getElementById("plus").addEventListener("click", plusfun);
function plusfun() {
  quantity++;
  document.getElementById("quan").value = quantity;
}

/* the below function is used to add product to cart */

// here   "cartData" is the local storage

var cartList = JSON.parse(localStorage.getItem("cartData")) || [];
var dataofNextPage = JSON.parse(localStorage.getItem("nextPageData"))

document
  .getElementById("addToCartDiv")
  .addEventListener("click", addProductToCart);
function addProductToCart() {
  var name = document.getElementById("productName").textContent;
  var weight = document.getElementById("productWeight").value;
  var price = document.getElementById("productPrice").textContent;
  var quantity = document.getElementById("quan").value;

  var cartItems = {
    p_Image : dataofNextPage.productImageUrl,
    p_Name: name,
    p_Weight: weight,
    p_Price: price,
    p_Quantity: quantity,
  };

  cartList.push(cartItems);
  localStorage.setItem("cartData", JSON.stringify(cartList));
}

/* the below function used for hover mouse function */

// document.getElementById("realDealKnowMore").addEventListener

var data = JSON.parse(localStorage.getItem("nextPageData"));

document
  .getElementById("productImage")
  .setAttribute("src", data.productImageUrl);
document.getElementById("productName").textContent = data.productName;
document.getElementById("productPrice").textContent = data.productPrice;
document.getElementById("emiBoxSpan").textContent = data.productPrice / 4;

document.getElementById("rightArrow").addEventListener("click", nextImage);

/* the below function is used to slide the imagaes of products to the right side */

var count = -1;
function nextImage() {
  count++;
  if (count === data.imageUrl.length) {
    count = 0;
  }
  for (var i = 0; i < 1; i++) {
    document
      .getElementById("productImage")
      .setAttribute("src", data.imageUrl[count]);
  }
}

/* the below function is used to slide the imagaes of products to the left side */

document.getElementById("leftArrow").addEventListener("click", previousImage);
function previousImage() {
  if (count === 0) {
    count = data.imageUrl.length;
  }
  count--;
  for (var i = 0; i < 1; i++) {
    document
      .getElementById("productImage")
      .setAttribute("src", data.imageUrl[count]);
  }
}

starRating(data);

function starRating(data) {
  var star1 = document.createElement("h1");
  star1.innerHTML = "&bigstar;";
  var star2 = document.createElement("h1");
  star2.innerHTML = "&star;";

  var lineH = "";
  var rating = data.totalRatings / data.totalCustomers;

  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      lineH = lineH + star1.textContent;
    } else {
      lineH = lineH + star2.textContent;
    }
  }
  document.getElementById("ratingTab").textContent = lineH + " " + "  " + data.totalCustomers + "   Reviews";

}


document.getElementById("productImage").addEventListener("click",zoomImage);
var zoom = document.createElement("a");
function zoomImage(){
  zoom.setAttribute("href","http://surl.li/aoiip");
  console.log("ashok")
}