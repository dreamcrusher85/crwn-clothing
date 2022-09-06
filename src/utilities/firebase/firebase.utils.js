
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYyBYCTsPYXT3HvOSrwfVYkUCFy_D_2VI",
  authDomain: "crwn-db-1174e.firebaseapp.com",
  projectId: "crwn-db-1174e",
  storageBucket: "crwn-db-1174e.appspot.com",
  messagingSenderId: "195196171710",
  appId: "1:195196171710:web:bb3d7374737f8929a2f5ef"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup (auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    if (!userSnapShot.exists()) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       try {
        await setDoc(userDocRef, {displayName, email, createdAt})
       } catch(error) {
        console.log('error creating user', error.message);

       }

    }
    return userDocRef;
};