auth.onAuthStateChanged((user) => {

    if (user) {

        db.collection("students")
            .doc(user.uid)
            .get()
            .then((doc) => {
                const data = doc.data();
                document.getElementById("studentName").innerHTML = data.name;
                document.getElementById("studentEmail").innerHTML = data.email;
            });

    } else {

        window.location.href = "login.html";
    }
});