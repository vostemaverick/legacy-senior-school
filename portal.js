function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "student" && password === "1234"){

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    }else{

        document.getElementById("message").innerHTML =
        "Invalid username or password";
    }
}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}

/* Protect Dashboard */

if(window.location.pathname.includes("dashboard.html")){

    let isLoggedIn = localStorage.getItem("loggedIn");

    if(isLoggedIn !== "true"){

        window.location.href = "login.html";
    }
}
