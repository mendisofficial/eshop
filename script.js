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