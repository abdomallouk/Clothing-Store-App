import { initializeApp } from "firebase/app";
import { getAuth, 
        signInWithPopup, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        GoogleAuthProvider,
        signOut,
        onAuthStateChanged } from 'firebase/auth'


import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYyguWkJIljLxtXN7PUL2_qEjvORzPSyQ",
  authDomain: "clothing-app-208f1.firebaseapp.com",
  projectId: "clothing-app-208f1",
  storageBucket: "clothing-app-208f1.appspot.com",
  messagingSenderId: "159466112684",
  appId: "1:159466112684:web:b91692834327ac556b8109"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account'
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider) /// here we create a siging method with google 




export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid) /// here we create new document inside a the collection of 'users'

    
    const userSnapShot = await getDoc(userDocRef) // here we use snapshot to get the document data if it exists 


    if(!userSnapShot.exists()) { //// id the document does not exist we create new one with the data that we get from the authentification phase with google 
        const { displayName, email } = userAuth;
        const creatAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                creatAt,
                ...additionalInfo
            })

        } catch(error) {

            console.log(`failing to add new user ${error.message}`)

        }
    }

    return userDocRef;

}


export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

   return  await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

   return  await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUSer = async () => await  signOut(auth)


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)