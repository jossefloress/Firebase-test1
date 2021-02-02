const btnLogin = document.getElementById('btnLogin');

btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        // window.location.replace("./main.html");
        // console.log(firebaseUser)
        btnLogin.classList.add('hide');
    }
    else {
        console.log("Not loggedin");
        window.location.replace("./index.html");
    }
});