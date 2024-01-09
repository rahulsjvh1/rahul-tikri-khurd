var signup_frm = document.getElementById("signup_frm");
signup_frm.onsubmit=function(){
    var user = document.getElementById("username").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = btoa(document.getElementById("password").value);
    var user_object_data = {username:user,mobile:mobile,email:email,password:password};
    var user_text_data = JSON.stringify(user_object_data);

    if(user != "" && mobile != "" && email !="" && password !== ""){
        localStorage.setItem(email,user_text_data);
        alert("sign up successful");
        setTimeout(function(){
            signup_frm.reset(); 
        },1000);
        return false
    };
};
var email_input = document.getElementById("email");
var warning = document.getElementById("email_notice");
var signup_btn = document.getElementById("signup_btn");
email_input.onchange = function() {   

    var email = document.getElementById("email").value;
    if(localStorage.getItem(email) != null){
         warning.style.display="block";
         email_input.style.borderBottom = "2px solid red";
         signup_btn.disabled = true;
         signup_btn.style.backgroundColor="red";

         email_input.onclick = function () {
            email_input.value ="";
            email_input.style.borderBottom = "none"
            warning.style.display="none";
            signup_btn.disabled = false;
            signup_btn.style.backgroundColor ="black";
         };
    };
};