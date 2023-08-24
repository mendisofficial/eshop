function changeView(){
    const signUpBox = document.getElementById("signupbox");
    const signInBox = document.getElementById("signinbox");

    signUpBox.classList.toggle("d-none");
    signInBox.classList.toggle("d-none");
}

function signUp() {
    const fn = document.getElementById("fname");
    const ln = document.getElementById("lname");
    const e = document.getElementById("email");
    const pw = document.getElementById("password");
    const m = document.getElementById("mobile");
    const g = document.getElementById("gender");

    let f = new FormData();
    f.append("fname", fn.value);
    f.append("lname", ln.value);
    f.append("email", e.value);
    f.append("password", pw.value);
    f.append("mobile", m.value);
    f.append("gender", g.value);

    let r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.readyState === 4 && r.status === 200) {
            let t = r.responseText;

            if (t === "success") {

                document.getElementById("msg").innerHTML = t;
                document.getElementById("msg").className = "alert alert-success";
                document.getElementById("msgdiv").className = "d-block";

            } else {

                document.getElementById("msg").innerHTML = t;
                document.getElementById("msgdiv").className = "d-block";

            }

        }
    }

    r.open("POST", "signUpProcess.php", true);
    r.send(f);
}

function signin(){
    var email = document.getElementById("email2");
    var password = document.getElementById("password2");
    var rememberme = document.getElementById("rememberme");

    var f = new FormData();
    f.append ("e",email.value);
    f.append ("p",password.value);
    f.append ("r",rememberme.checked);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function(){
        if(r.readyState == 4 && r.status == 200){
            var t = r.responseText;
            if(t == "success"){
                window.location = "home.php";
            }else{
                alert (t);
            }
            
        }
    }
    
    r.open("POST","signinProcess.php",true);
    r.send(f);
}

var bm;
function forgotPassword(){

    var email = document.getElementById("email2");

    var r = new XMLHttpRequest();

    r.onreadystatechange = function (){
        if(r.readyState == 4 && r.status == 200){
            var t = r.responseText;
            if(t == "success"){

                var m = document.getElementById("forgotPasswordModal");
                bm = new bootstrap.Modal(m);
                bm.show();

            }else{
                alert (t);
            }
            
        }
    }

    r.open("GET","forgotPasswordProcess.php?e="+email.value,true);
    r.send();
    
}

function resetPassword(){
    
    var email = document.getElementById("email2");
    var np = document.getElementById("np");
    var rnp = document.getElementById("rnp");
    var vc = document.getElementById("vc");

    var f = new FormData();
    f.append("e",email.value);
    f.append("np",np.value);
    f.append("rnp",rnp.value);
    f.append("vc",vc.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function (){
        if(r.readyState == 4 && r.status == 200){
            var t = r.responseText;

            if(t == "success"){

                bm.hide();
                alert ("Your password has been updated.");
                window.location.reload();

            }else{
                alert (t);
            }
        }
    }

    r.open("POST","resetPasswordProcess.php",true);
    r.send(f);
    
}

function showPassword(){

    var np = document.getElementById("np");
    var npb = document.getElementById("npb");

    if(np.type == "password"){
        np.type = "text";
        npb.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }else{
        np.type = "password";
        npb.innerHTML = '<i class="bi bi-eye"></i>';
    }

}

function showPassword2(){

    var rnp = document.getElementById("rnp");
    var rnpb = document.getElementById("rnpb");

    if(rnp.type == "password"){
        rnp.type = "text";
        rnpb.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }else{
        rnp.type = "password";
        rnpb.innerHTML = '<i class="bi bi-eye"></i>';
    }

}

function signout(){

    var r = new XMLHttpRequest();

    r.onreadystatechange = function(){
        if(r.readyState == 4 && r.status == 200){
            var t = r.responseText;

            if(t == "success"){

                // window.location.reload();
                window.location = "index.php";

            }else{
                alert (t);
            }
        }
    }

    r.open("GET","signoutProcess.php",true);
    r.send();
    
}

function showPassword3(){

    var pw = document.getElementById("pw");
    var pwb = document.getElementById("pwb");

    if(pw.type == "password"){
        pw.type = "text";
        pwb.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }else{
        pw.type = "password";
        pwb.innerHTML = '<i class="bi bi-eye-fill"></i>';
    }

}

function updateProfile(){

    var profile_img = document.getElementById("profileImage");
    var first_name = document.getElementById("fname");
    var last_name = document.getElementById("lname");
    var mobile_no = document.getElementById("mobile");
    var password = document.getElementById("pw");
    var email_address = document.getElementById("email");
    var address_line_1 = document.getElementById("line1");
    var address_line_2 = document.getElementById("line2");
    var province = document.getElementById("province");
    var district = document.getElementById("district");
    var city = document.getElementById("city");
    var postal_code = document.getElementById("pc");

    var f = new FormData();
    f.append("img",profile_img.files[0]);
    f.append("fn",first_name.value);
    f.append("ln",last_name.value);
    f.append("mn",mobile_no.value);
    f.append("pw",password.value);
    f.append("ea",email_address.value);
    f.append("al1",address_line_1.value);
    f.append("al2",address_line_2.value);
    f.append("p",province.value);
    f.append("d",district.value);
    f.append("c",city.value);
    f.append("pc",postal_code.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function (){
        if(r.status == 200 && r.readyState == 4){
            var t = r.responseText;

            if(t == "success"){
                signout();
                // window.location = "home.php";
            }else{
                alert (t);
            }
            
        }
    }

    r.open("POST","userProfileUpdateProcess.php",true);
    r.send(f);
    
}