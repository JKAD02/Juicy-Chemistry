var productsList = [
    {
      productType: "Toners",
      productImageUrl: "http://surl.li/aqsti",
      productName: "Bulgarian Damask Rose Hydrosol",
      productPurpose: "For Brighter Skin",
      productPrice: 350,
      productMrp: 550,
      totalRatings: 780,   
      productWeight:"100 GMS",   
      totalCustomers: 156,      
      imageUrl : ["http://surl.li/aqsti","http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
    },
    {
        productType: "Toners",
        productImageUrl: "http://surl.li/aqstj",
        productName: "Lavender Hydrosol",
        productPurpose: "For Dry Skin",
        productPrice: 500,
        productMrp: 550,
        productWeight:"100 GMS",
        totalRatings: 2116,      
        totalCustomers: 529,      
        imageUrl : ["http://surl.li/aqstj","http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
      },
      {
        productType: "Toners",
        productImageUrl: "http://surl.li/aqstn",
        productName: "Aloe Vera Hydrosol",
        productPurpose: "For Sensitive Skin",
        productPrice: 500,
        productMrp: 550,
        productWeight:"100 GMS",
        totalRatings: 1383,      
        totalCustomers: 461,      
        imageUrl : ["http://surl.li/aqstn","http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
      },
      {
        productType: "Toners",
        productImageUrl: "http://surl.li/aqsto",
        productName: "Australian Tea Tree and Basil Hydrosol",
        productPurpose: "For Acne-prone Skin",
        productPrice: 850,
        productMrp: 900,
        productWeight:"100 GMS",
        totalRatings: 1344,      
        totalCustomers: 336,      
        imageUrl : ["http://surl.li/aqsto","http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
      },
      {
        productType: "Toners",
        productImageUrl: "http://surl.li/aqstq",
        productName: "Green Apple Hydrosol",
        productPurpose: "For Youthful Skin",
        productPrice: 750,
        productWeight:"100 GMS",
        productMrp: 900,
        totalRatings: 340,      
        totalCustomers: 101,      
        imageUrl : ["http://surl.li/aqstq","http://surl.li/aqnux","http://surl.li/aqnva","http://surl.li/aqcbx","http://surl.li/aqdpv"],
      },
]
  
  displayProductList();
  
  
  
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
  
  if(filterSelect === "cleansers"){
    window.location.href = "cleansers.html";
  }
  if(filterSelect === "facialOils"){
    window.location.href = "facialOils.html";
  }
  console.log(filterSelect)
  
}
  
  
  
  
    