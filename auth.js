/* REGISTER */

function register(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)

    .then(() => {

        alert("Registration Successful!");

        window.location.href = "login.html";
    })

    .catch((error) => {

        alert(error.message);
    });
}

/* LOGIN */

function login(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)

    .then(() => {

        window.location.href = "dashboard.html";
    })

    .catch((error) => {

        document.getElementById("message").innerHTML =
        error.message;
    });
}

/* LOGOUT */

function logout(){

    auth.signOut()

    .then(() => {

        window.location.href = "login.html";
    });
}

/* PROTECT DASHBOARD */

if(window.location.pathname.includes("dashboard.html")){

    auth.onAuthStateChanged((user) => {

        if(!user){

            window.location.href = "login.html";
        }
    });
}
