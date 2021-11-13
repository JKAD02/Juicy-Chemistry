document.getElementById("fPayment").addEventListener("click", finalPayment);

function finalPayment() {
    var x = document.getElementById("otp").value;
    if (x.length == 6) {
        window.location = "success.html"
    } else {
        alert("Invalid OTP")
    }
}