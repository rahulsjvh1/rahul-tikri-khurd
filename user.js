window.onload = function () {
    if (sessionStorage.getItem("user") == null) {
        window.location.replace("testbooklogin.html");
    } else {
        var profile_upload = document.getElementById("profile_upload");
        profile_upload.onchange = function(){

        var replace = new FileReader();
        replace.readAsDataURL(profile_upload.files[0]);
        replace.onload = function(){
        var filename = replace.result;
        var profile_ico = document.getElementById("profile_ico");
        var profile_pic = document.getElementById("profile_pic");
        profile_pic.style.backgroundImage= "url("+filename+")";
        profile_pic.style.backgroundSize = "cover";
        profile_pic.style.backgroundPosition = "center";
        profile_ico.style.display ="none";

            }
        }
        
    }
    
}
