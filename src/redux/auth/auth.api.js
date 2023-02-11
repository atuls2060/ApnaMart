import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/utils/firebase";

export const loginUserApi = async ({ email, password }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return { uid: user.uid,name:user.displayName,errorMessage:"" }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {errorMessage}
    }

}

export const createAccountApi = async ({ name, email, password }) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        await updateProfile(user, { displayName: name })
        return { uid: user.uid,name,errorMessage:""  }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {errorMessage}
    }
}


