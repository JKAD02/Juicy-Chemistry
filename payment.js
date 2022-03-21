document.getElementById("paynow").addEventListener("click", PayNow);

function PayNow() {
    var x = document.getElementById("cardn").value;
    var y = document.getElementById("cvvn").value;
    if(x.length !==16 || y.length !== 3) {
        setTimeout(() => {
            alert("Invalid data") 
        }, 3000);
        
    } else {
        setTimeout(() => {
            window.location ="otp.html"
        },3000);
        
    }
}