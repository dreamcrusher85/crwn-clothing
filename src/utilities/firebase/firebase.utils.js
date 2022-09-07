
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,
    signInWithRedirect
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup (auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    
    if(!userAuth)return;

    const userDocRef = doc(db, 'users', userAuth.uid);

   
    const userSnapShot = await getDoc(userDocRef);

    
    if (!userSnapShot.exists()) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       try {
        await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation, })
       } catch(error) {
        console.log('error creating user', error.message);

       }

    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) {return;} else 
    {return await
    createUserWithEmailAndPassword(auth, email, password);}
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) {return;} else 
    {return await
    signInWithEmailAndPassword(auth, email, password);}
};