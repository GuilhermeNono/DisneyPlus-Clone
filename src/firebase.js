import {initializeApp} from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import * as storage from 'firebase/storage';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDCCMwELFmwh0GjSlT1PBZB-MLpRnJXBJ4",
    authDomain: "project-disneyplus-clone.firebaseapp.com",
    projectId: "project-disneyplus-clone",
    storageBucket: "project-disneyplus-clone.appspot.com",
    messagingSenderId: "929273620967",
    appId: "1:929273620967:web:f330f3df334ab6e8a37542",
    measurementId: "G-565Y0PWVPS"
  };

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export {auth, provider, storage};
export default db;