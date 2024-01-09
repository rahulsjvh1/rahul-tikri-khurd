//yah Hamara security page hai Un Kisi system ya TubeMate open Nahin Hoga jismein login Hai Usi mein open hoga//
window.onload = function () {
    if (sessionStorage.getItem("user") == null) {
        window.location.replace("testbooklogin.html");}
        else {
         //profile name codein//
        var user_email = sessionStorage.getItem("user");
        var JSON_text = localStorage.getItem(user_email);
        var obj_data = JSON.parse(JSON_text);
        var profile_name = document.getElementById("profile_name");
        profile_name.innerHTML = obj_data.username;
        //image local store send database//
        if(localStorage.getItem(user_email+"image") != null){
            var page_cover = document.getElementById("page_cover");
            page_cover.style.display ="none"; 
        };
        // profile picture upload codei//
        var profile_upload = document.getElementById("profile_upload");
        profile_upload.onchange = function(){

        var replace = new FileReader();
        replace.readAsDataURL(profile_upload.files[0]);
        replace.onload = function(){
        var filename = replace.result;
        var profile_ico = document.getElementById("profile_ico");
        var profile_pic = document.getElementById("profile_pic");
        var Next = document.getElementById("Next");
        profile_pic.style.backgroundImage= "url("+filename+")";
        profile_pic.style.backgroundSize = "cover";
        profile_pic.style.backgroundPosition = "center";
        profile_ico.style.display ="none";
        Next.style.display = "block";
        //Jab pahli bar login Hota Hai Tabhi contents Hoga Uske bad contain aapko show Nahin hoga//
        Next.onclick = function(){
        localStorage.setItem(user_email+"image",filename);
        var page_cover = document.getElementById("page_cover");
        page_cover.style.display ="none";
        };
            };
        };
    };
};
