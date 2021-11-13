var productsList = [
  {
    productType: "Cleansers",
    productImageUrl: "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/limegingersoap_400x.jpg?v=1629376337",
    productName: "Lime, Ginger and Rice Soap",
    productPurpose: "For Tanning",
    productPrice: 412.5,
    productMrp: 550,
    productWeight:"100 GMS",
    totalRatings: 50,
    totalCustomers: 10,
    imageUrl : ["https://cdn.shopify.com/s/files/1/0058/7779/2832/products/KZ7_2346_1024x1024.png?v=1634729432",
    "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/0016_1_1024x1024.jpg?v=1629400505",
    "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/Limesoapback_1024x1024.jpg?v=1629376613",
    "https://cdn.shopify.com/s/files/1/0058/7779/2832/files/lime_ginger_soap.png?v=1629521045" ],
  },
  {
    productType: "Cleansers",
    productImageUrl: "http://surl.li/aoiip",
    productName: "Carrot, Rosehip and Neroli Soap",
    productPurpose: "For Pigmentation",
    productPrice: 480,
    productMrp: 600,
    productWeight:"100 GMS",
    totalRatings: 50,
    totalCustomers: 20,
    imageUrl : ["http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
  },
  {
    productType: "Cleansers",
    productImageUrl: "http://surl.li/aoijd",
    productName: "Damask Rose, Geranium and Saffron Soap",
    productPurpose: "For Brighter Skin",
    productPrice: 440,
    productMrp: 550,
    productWeight:"100 GMS",
    totalRatings: 60,
    totalCustomers: 15,
    imageUrl : ["http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
  },
  {
    productType: "Cleansers",
    productImageUrl: "http://surl.li/aoijk",
    productName: "Tea Tree, Neem and Rosemary Soap",
    productPurpose: "Antibacterial",
    productPrice: 400,
    productMrp: 500,
    productWeight:"100 GMS",
    totalRatings: 50,
    totalCustomers: 10,
    imageUrl : ["http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
  },
  {
    productType: "Cleansers",
    productImageUrl: "http://surl.li/aoijl",
    productName: "Cucumber, Matcha and Spearmint Soap",
    productPurpose: "For Acne-prone Skin",
    productPrice: 440,
    productMrp: 550,
    productWeight:"100 GMS",
    totalRatings: 60,
    totalCustomers: 30,
    imageUrl : ["http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
  },
  {
    productType: "Cleansers",
    productImageUrl: "http://surl.li/aoijo",
    productName: "Papaya, Apricot and Mandarin Soap",
    productPurpose: "For Dry Skin",
    productPrice: 440,
    productMrp: 550,
    productWeight:"100 GMS",
    totalRatings: 10,
    totalCustomers: 10,
    imageUrl : ["http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
  },
];

displayProductList();

// var cartDetails =JSON.parse(localStorage.getItem("cartData")) || [];

function displayProductList() {
  document.getElementById("itemDataBox").textContent = "";

  productsList.map(function (item, index) {
    var imageDiv = document.createElement("div");

    var imageurl = document.createElement("img");
    imageurl.setAttribute("src", item.productImageUrl);

    /* i create nextPage function to go next page of product (complete Details page) */

    imageurl.addEventListener("click", function(){
      nextPage(item);
    });

    // this div is for main text (name of the product) and name of div in css == nameDiv

    var name = document.createElement("div");
    name.setAttribute("id", "nameDiv");

    var nameHead = document.createElement("h1");
    nameHead.setAttribute("id", "p_name");
    nameHead.textContent = item.productName;

    name.append(nameHead);
    name.addEventListener("click", function(){
      nextPage(item);
    });

    // this div for second line of text (purpose of product) and name of div in css  == p_purpose

    var purpose = document.createElement("h2");
    purpose.setAttribute("id", "p_purpose");
    purpose.textContent = item.productPurpose;

    // this function for ratings and reviews and name of the div in css == p_ratings;

    starRating(item);

    function starRating(item){

      var star1 = document.createElement("h1");
      star1.innerHTML = "&bigstar;"
      var star2 = document.createElement("h1");
      star2.innerHTML = "&star;";
    
      var lineH = "";
      var rating = item.totalRatings / item.totalCustomers;
      
      for(var i = 0; i < 5; i++){
        if(i < rating){
            lineH = lineH + star1.textContent;
        }else{
          lineH = lineH + star2.textContent;
        }
      }
     
      var ratingbox = document.createElement("h1");
      ratingbox.setAttribute("id","p_rating");
      ratingbox.textContent = lineH + "   " + item.totalCustomers +" Reviews";
    
      imageDiv.append(imageurl, name, purpose, ratingbox)
    }

    // this div for price tag and add To Cart button and name of the div in css == cartBox and pricetag and add to cart placed inside this div;

    var cart = document.createElement("div");
    cart.setAttribute("class", "addToCart");
    cart.setAttribute("id", "p_price");
    cart.innerHTML =
      "<h3>&#8377; </h3>" + " " + item.productPrice + "<h4>ADD TO CART</h4>";

      /* below item is used to add product to cart */

      cart.addEventListener("click",function(){
        addToCart(item,cart);
      });

      /* below are used to mouseover and mourseout function */
    cart.onmouseover = mouseover;
    cart.onmouseout = mouseout;
    function mouseover() {
      cart.style.backgroundColor = "black";
      cart.style.color = "white";
    }
    function mouseout() {
      cart.style.backgroundColor = "";
      cart.style.color = "";
    }

    imageDiv.append( cart);

    document.getElementById("itemDataBox").append(imageDiv);

    document.querySelector("body").append(itemDataBox);
  });

}

/* this function is used for add to products to cart */

  var cartDetails = JSON.parse(localStorage.getItem("cartData")) || [] ;

function addToCart(item){
  var name = item.productName;
  var price = item.productPrice;
  var image = item.productImageUrl;
  var weight = item.productWeight;
  var quantity = -1;

  var cartList = {
    p_Name : name,
    p_Price : price,
    p_Quantity : quantity,
    p_Image :image,
    p_Weight:weight,
  }

  if(cartDetails.length === 0){
    cartList.p_Quantity++;
   cartDetails.push(cartList);
}
 duplicateItem();
 function duplicateItem(){
   for(var i = 0 ; i < cartDetails.length; i++){
   if(cartDetails[i].p_Name === cartList.p_Name){
    return  cartDetails[i].p_Quantity++
   }

 }
 cartList.p_Quantity = 1;
 return  cartDetails.push(cartList);
 }
   
   localStorage.setItem("cartData",JSON.stringify(cartDetails));

}

/* below function is used for sort by price low to high and  high to low */

document.getElementById("sortBy").addEventListener("click", priceSorting);

function priceSorting() {
  var priceSelect = document.getElementById("sortBy").value;

  if(priceSelect === "feature"){
    document.getElementById("sortBy").removeEventListener("click")
  }

  if (priceSelect === "low") {
    
    var product = productsList.sort(function (a, b) {
      return a.productPrice - b.productPrice;
    });
  }

  if (priceSelect === "high") {
    var product = productsList.sort(function (a, b) {
      return b.productPrice - a.productPrice;
    });
  }
  if(priceSelect === "rating"){
    var product = productsList.sort(function(a,b){
      return (b.totalRatings/b.totalCustomers)-(a.totalRatings/a.totalCustomers) ;
      
    })
  }

  displayProductList(product);
  
}

/* this function is used for go to next page when click on product image */

function nextPage(item) {
  localStorage.setItem("nextPageData",JSON.stringify(item))
  window.location.href = "productCompleteDetails.html";

}


/* this function used for to go filter Selext page */

document.getElementById("filter").addEventListener("click",filterPage);

function filterPage(){
  var filterSelect = document.getElementById("filter").value;
  
  if(filterSelect === "toners"){
    window.location.href = "toners.html";
  }
  if(filterSelect === "facialOils"){
    window.location.href = "facialOils.html";
  }
  // if(filterSelect === "cleansers"){
  //   window.location.href = "cleansers.html";
  // }
  
}




  