import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjiHMJ8qNbHsNIqoVtssZrtoXZTPV4Rfs",
  authDomain: "bugtracker-3e884.firebaseapp.com",
  projectId: "bugtracker-3e884",
  storageBucket: "bugtracker-3e884.appspot.com",
  messagingSenderId: "694872528810",
  appId: "1:694872528810:web:f20aeaf514290e426f7dd3",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

//CREATE DOC IN DB
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) {
    return;
  } else {
    const docRef = doc(firestore, "users", userAuth.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const { email } = userAuth;
      const createdAt = new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString();

      try {
        await setDoc(docRef, {
          id: docRef.id,
          email,
          createdAt,
          projects: [],
          tasks: [],
          ...additionalInformation,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }

    return docRef.id;
  }
};
//CREATE DOC IN DB

//REGISTER
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
//REGISTER

//LOGIN
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  await signInWithEmailAndPassword(auth, email, password)
    .then((user) => user)
    .catch((err) => false);
};
//LOGIN

//LISTENER FOR AUTH CHANGE
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
//LISTENER FOR AUTH CHANGE

//ODHLASENIE
export const signOutUser = async () => signOut(auth);
//ODHLASENIE

//UPDATE PROJECTS
export const updateProjects = async (userId, projectObject) => {
  const userRef = doc(firestore, "users", userId);
  console.log(projectObject);

  await updateDoc(userRef, { projects: [...projectObject] });
};
//UPDATE PROJECTS

//CHECK EMAIL IN USE
export const checkEmail = async (email) => {
  const collectionSnapshot = await getDocs(collection(firestore, "users"));
  const isUsed = collectionSnapshot.docs.some((doc) => doc.data().email === email);
  return isUsed;
};
//CHECK EMAIL IN USE
