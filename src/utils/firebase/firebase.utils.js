import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
export const storage = getStorage(app);

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

  return await signInWithEmailAndPassword(auth, email, password)
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

//UPLOAD PROFILE IMAGE
export const uploadImage = async (userId, file) => {
  const storageRef = ref(storage, `userImages/${userId}.${file.type.slice(6)}`);
  return await uploadBytes(storageRef, file).then(async (snapshot) => {
    const { fullPath } = snapshot.metadata;
    const downloadURL = await getDownloadURL(storageRef).then((url) => url);

    return { fullPath, downloadURL };
  });
};
//UPLOAD PROFILE IMAGE

//DELETE PROFILE IMAGE
export const deleteImage = async (fullPath) => {
  const imgRef = ref(storage, fullPath);

  deleteObject(imgRef)
    .then(() => console.log("DELETED"))
    .catch((err) => console.log(err));
};
//DELETE PROFILE IMAGE

//UPDATE USER PROFILE IMAGE
export const updateProfileImage = async (userId, imgURL, fullPath, isDefault) => {
  const userRef = doc(firestore, "users", userId);
  await updateDoc(userRef, { profileImage: { default: isDefault, imgURL, fullPath } });
};
//UPDATE USER PROFILE IMAGE

//DELETE USER PROFILE
export const deleteWholeUser = async (userId, fullPath) => {
  const userRef = doc(firestore, "users", userId);

  await deleteUser(auth.currentUser)
    .then(() => console.log("DELETED USER"))
    .catch((err) => console.log(err));

  // await signOutUser();

  if (fullPath !== "defaultProfileImg/basicProfile.svg") {
    await deleteImage(fullPath);
  }

  await deleteDoc(userRef);
};
//DELETE USER PROFILE
