const btnLogin = document.getElementById('btnLogin');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
        window.location.replace("./index.html");

    }
});

btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser && firebaseUser.isAnonymous) {
        // window.location.replace("./main.html");
        // console.log(firebaseUser)
        btnLogin.classList.add('hide');
    }
    else {
        console.log("Not loggedin");
    }
});