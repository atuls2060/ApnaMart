import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA-ChVmtI60C6ZnEpFlWx167CfgW5xgPRo",
    authDomain: "apnamart-bb573.firebaseapp.com",
    projectId: "apnamart-bb573",
    storageBucket: "apnamart-bb573.appspot.com",
    messagingSenderId: "462022775158",
    appId: "1:462022775158:web:e5f6b283fdf025c4ed2a57",
    measurementId: "G-VS0KBK20ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db }