document.getElementById("btntoshipp").addEventListener("click", GoToPaymentPage);

function GoToPaymentPage() {
    var a = document.getElementById("frstname").value;
    var b = document.getElementById("lstname").value;
    var c = document.getElementById("addressd").value;
    var d = document.getElementById("aprtsn").value;
    var e = document.getElementById("cityn").value;
    var f = document.getElementById("countryn").value;
    var g = document.getElementById("staten").value;
    var h = document.getElementById("pinc").value;
    var i =  document.getElementById("phnen").value;
    if(a.length === 0 || b.length === 0 || c.length === 0 || d.length === 0 || e.length === 0 || f.length === 0 || g.length === 0 || h.length === 0 || i.length === 0) {
        alert("Please fill up all input fields");
    } else {
        window.location = "payment.html";
    }
}