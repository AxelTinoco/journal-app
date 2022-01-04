import { types } from "../types/types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup ,updateProfile} from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebaseConfig";


export const startLoginEmailPasword = (email,password) => {
    return (dispatch) => {
      
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password).then(({user}) =>{
            dispatch(login(user.uid, user.displayName))
        });

    }
}

export const startWithEmailPasswordName = (email,password,name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .then(async({user}) => {

                await updateProfile( user, { displayName: name })

                dispatch(login(user.uid, user.displayName))
                console.log(user)
            })
            .catch(e => {
                console.log(e)
            })
    }
}


export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid , displayName ) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }

})