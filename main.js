// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_inJZ6S5eny1KZsy85U2-kJeDL-gQUYI",
    authDomain: "detective-app-3fa72.firebaseapp.com",
    databaseURL: "https://detective-app-3fa72-default-rtdb.firebaseio.com",
    projectId: "detective-app-3fa72",
    storageBucket: "detective-app-3fa72.appspot.com",
    messagingSenderId: "69962609968",
    appId: "1:69962609968:web:860427a131bf13b4b0c4f5",
    measurementId: "G-FHTLG3CHXF"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            //document.write("index.html")
            window.location.href = "story.html";
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            //document.write("index.html")
            window.location.href = "story.html";
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}