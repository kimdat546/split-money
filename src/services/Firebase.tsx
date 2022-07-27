import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
} from "firebase/firestore";
interface User {
    id: string;
    uid: string;
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
const db = getFirestore(app);
const usersCollection = collection(db, "users");

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        addUser(result.user);
        return { success: true, message: "sign in ok" };
    } catch (error) {
        console.log(error);
    }
};

export const getUsers = async () => {
    try {
        const result = await getDocs(usersCollection);
        return {
            success: true,
            message: "get users ok",
            data: result.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        };
    } catch (e) {
        console.error("Error document: ", e);
    }
};

export const addUser = async (user: User) => {
    const { uid, displayName, email, photoURL }: User = user;
    try {
        await addDoc(usersCollection, {
            uid,
            displayName,
            email,
            photoURL,
        });
        return { success: true, message: "add user ok" };
    } catch (e) {
        console.error("Error document: ", e);
    }
};

export const updateUser = async (user: User) => {
    const { id, ...dataUpdate }: User = user;
    const userDoc = doc(db, "users", id);
    try {
        await updateDoc(userDoc, dataUpdate);
        return { success: true, message: "update user ok" };
    } catch (e) {
        console.error("Error document: ", e);
    }
};

// export const checkUser = async (uid: string) => {
//     try {
//         const doc = await collection(db, "users", {
//             uid,
//         }).get();
//         return doc.exists;
//     } catch (e) {
//         console.error("Error checking user: ", e);
//     }
// };
