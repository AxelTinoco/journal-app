import Swal from 'sweetalert2'
import { types } from "../types/types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup ,signOut,updateProfile} from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPasword = (email,password) => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch(startLoading())
        signInWithEmailAndPassword(auth,email,password).then(({user}) =>{
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        })
        .catch(e => {
            dispatch(finishLoading());
            console.log(e)
            Swal.fire({
                
                    title: 'Error',
                    text: e.message,
                    customClass: {
                        container: 'd-flex flex-column',
                        popup:'d-flex flex-column'
                    },
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown d-flex flex-column'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp d-flex flex-column'
                    },
                   
                    icon: 'error',
                    
            })
        })

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
                Swal.fire({
                
                    title: 'Error',
                    text: e.message,
                    customClass: {
                        container: 'd-flex flex-column',
                        popup:'d-flex flex-column'
                    },
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown d-flex flex-column'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp d-flex flex-column'
                    },
                   
                    icon: 'error',
                    
            })
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

export const startLogout = () => {

    return async (dispatch) => {
        const auth = getAuth();
       await signOut(auth)
       dispatch(logout());

    }
}

export const logout = () => ({
    type: types.logout
})