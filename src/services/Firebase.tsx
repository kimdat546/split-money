import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface User {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}

const firebaseConfig = {
    apiKey: "AIzaSyARXoB1gSoo40P_XpCROvC478XKLCQNdBA",
    authDomain: "splitmoney-fe1cd.firebaseapp.com",
    projectId: "splitmoney-fe1cd",
    storageBucket: "splitmoney-fe1cd.appspot.com",
    messagingSenderId: "252715623668",
    appId: "1:252715623668:web:ad6ef9aaa54d89aadb2aa1",
    measurementId: "G-3874QEEPBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
        .then((result) => {
            const { displayName, email, photoURL }: User = result.user;
            localStorage.setItem("name", JSON.stringify(displayName));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("avatar", JSON.stringify(photoURL));
        })
        .catch((error) => {
            console.log(error);
        });
