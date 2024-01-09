var login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function(){

    var email = document.getElementById("login_email");
    var password = btoa(document.getElementById("login_password").value);

  if(localStorage.getItem(email.value)== null){
  alert("Your Email Id Is Not Reistered");}
  else{
      var user_text_data = localStorage.getItem(email.value);
      var user_object_data = JSON.parse(user_text_data);
      var correct_email = user_object_data.email;
      var correct_password = user_object_data.password;

      if(email.value == correct_email){
        if(password == correct_password){
          sessionStorage.setItem("user",email.value);
          window.location.replace("user.html");
        }else{
                alert("wrong password");
            }
            return false;
    }
  }

    }
