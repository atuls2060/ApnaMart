import axios from "axios"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/utils/firebase";

export const loginUserApi = async ({ email, password }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return { uid: user.uid }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }

}

export const createAccountApi = async ({ name, email, password }) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
       
        updateProfile(user,{
            displayName:name
        }).then(()=>{
            console.log("updated")

            const user = userCredential.user;
            return { uid: user.uid }
        }).catch(()=>{
            console.log("error")
        })

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}