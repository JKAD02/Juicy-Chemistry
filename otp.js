document.getElementById("fPayment").addEventListener("click", finalPayment);

function finalPayment() {
    var x = document.getElementById("otp").value;
    if (x == 123456) {
        window.location = "success.html"
    } else {
        alert("Invalid OTP")
    }
}