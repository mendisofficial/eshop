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

function loadBrands(){
    var category = document.getElementById("category").value;

    var r = new XMLHttpRequest();

    r.onreadystatechange = function (){
        if(r.status == 200 && r.readyState == 4){
            var t = r.responseText;
            
            document.getElementById("brand").innerHTML = t;
            
        }
    }

    r.open("GET","loadBrandProcess.php?c="+category,true);
    r.send();
}

function changeProductImage(){
    var images = document.getElementById("imageuploader");

    images.onchange = function (){
        var file_count = images.files.length;

        if(file_count <= 3){

            for(var x = 0; x < file_count; x++){
                var file = images.files[x];
                var url = window.URL.createObjectURL(file);
                document.getElementById("i" + x).src = url;
            }

        }else{
            alert (file_count + " files selected. Please select only 3 or less than 3 files.")
        }
    }
}

function addProduct(){
    var category = document.getElementById("category");
    var brand = document.getElementById("brand");
    var model = document.getElementById("model");
    var title = document.getElementById("title");
    var condition = 0;
    if(document.getElementById("b").checked){
        condition = 1;
    }else if(document.getElementById("u").checked){
        condition = 2;
    }
    var clr = document.getElementById("clr");
    var qty = document.getElementById("qty");
    var cost = document.getElementById("cost");
    var dwc = document.getElementById("dwc");
    var doc = document.getElementById("doc");
    var desc = document.getElementById("desc");
    var image = document.getElementById("imageuploader");

    var f = new FormData();
    f.append("ca",category.value);
    f.append("b",brand.value);
    f.append("m",model.value);
    f.append("t",title.value);
    f.append("con",condition);
    f.append("col",clr.value);
    f.append("qty",qty.value);
    f.append("cost",cost.value);
    f.append("dwc",dwc.value);
    f.append("doc",doc.value);
    f.append("desc",desc.value);

    var file_count = image.files.length;
    for(var x = 0; x < file_count; x++){
        f.append("img" + x,image.files[x]);
    }

    var r = new XMLHttpRequest();
    r.onreadystatechange = function (){
        if(r.status == 200 && r.readyState == 4){
            var t = r.responseText;
            if(t == "success"){
                window.location.reload();
            }else{
                alert (t);
            }
        }
    }
    r.open("POST","addProductProcess.php",true);
    r.send(f);
}

function sort(x) {

    var search = document.getElementById("s");
    var time = "0";

    if (document.getElementById("n").checked) {
        time = "1";
    } else if (document.getElementById("o").checked) {
        time = "2";
    }

    var qty = "0";

    if (document.getElementById("h").checked) {
        qty = "1";
    } else if (document.getElementById("l").checked) {
        qty = "2";
    }

    var condition = "0";

    if (document.getElementById("b").checked) {
        condition = "1";
    } else if (document.getElementById("u").checked) {
        condition = "2";
    }

    var f = new FormData();
    f.append("s", search.value);
    f.append("t", time);
    f.append("q", qty);
    f.append("c", condition);
    f.append("page", x);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.status == 200 && r.readyState == 4) {
            var t = r.responseText;

            document.getElementById("sort").innerHTML = t;

        }
    }

    r.open("POST", "sortProcess.php", true);
    r.send(f);

}

function clearSort() {
    window.location.reload();
}

function changeStatus(id) {

    var product_id = id;
    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.status == 200 && r.readyState == 4) {
            var t = r.responseText;
            if (t == "activated" || t == "deactivated") {
                window.location.reload();
            } else {
                alert(t);
            }
        }
    }

    r.open("GET", "changeStatusProcess.php?p=" + product_id, true);
    r.send();

}

function sendId(id) {

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.status == 200 && r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {
                window.location = "updateProduct.php";
            } else {
                alert(t);
            }
        }
    }

    r.open("GET", "sendIdProcess.php?id=" + id, true);
    r.send();

}

function updateProduct() {
    var title = document.getElementById("t");
    var qty = document.getElementById("q");
    var dwc = document.getElementById("dwc");
    var doc = document.getElementById("doc");
    var description = document.getElementById("d");
    var image = document.getElementById("imageuploader");

    var f = new FormData();
    f.append("t", title.value);
    f.append("q", qty.value);
    f.append("dwc", dwc.value);
    f.append("doc", doc.value);
    f.append("d", description.value);

    var file_count = image.files.length;
    for (var x = 0; x < file_count; x++) {
        f.append("i" + x, image.files[x]);
    }

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.status == 200 && r.readyState == 4) {
            var t = r.responseText;

            if (t == "success") {
                window.location = "myProducts.php";
            } else if (t == "Invalid Image Count") {

                if (confirm("Don't you want to update Product Images?") == true) {
                    window.location = "myProducts.php";
                } else {
                    alert("Select images.");
                }
            } else {
                alert(t);
            }
        }
    }

    r.open("POST", "updateProductProcess.php", true);
    r.send(f);
}

function basicSearch(x) {
    var text = document.getElementById("kw").value;
    var select = document.getElementById("c").value;

    var f = new FormData();
    f.append("t", text);
    f.append("s", select);
    f.append("page", x);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.status == 200 && r.readyState == 4) {
            var t = r.responseText;
            document.getElementById("basicSearchResult").innerHTML = t;
        }
    }

    r.open("POST", "basicSearchProcess.php", true);
    r.send(f);
}

function advancedSearch(x){
    var txt = document.getElementById("t");
    var category = document.getElementById("c1");
    var brand = document.getElementById("b1");
    var model = document.getElementById("m");
    var condition = document.getElementById("c2");
    var color = document.getElementById("c3");
    var from = document.getElementById("pf");
    var to = document.getElementById("pt");
    var sort = document.getElementById("s");

    var f = new FormData();

    f.append("t",txt.value);
    f.append("cat",category.value);
    f.append("b",brand.value);
    f.append("mo",model.value);
    f.append("con",condition.value);
    f.append("col",color.value);
    f.append("pf",from.value);
    f.append("pt",to.value);
    f.append("s",sort.value);
    f.append("page",x);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function (){
        if(r.status == 200 && r.readyState == 4){
            var t = r.responseText;
            document.getElementById("view_area").innerHTML = t;
        }
    }

    r.open("POST","advancedSearchProcess.php",true);
    r.send(f);
}