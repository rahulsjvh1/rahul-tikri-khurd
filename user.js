window.onload = function () {
    if (sessionStorage.getItem("user") == null) {
        window.location.replace("testbooklogin.html");
    } else {
       