import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"


export const startNewNote = () => {
    return async (dipatch,getState) => {
        //const state = getState() toma los estados globales o states 
        const uid = getState().auth.uid
        console.log(uid)

        const newNote = {
         titlle: "",
         body :"",
         date: new Date().getTime()
         }

        // const docRef =  db.collection(`${uid}/journal/notes`).add(newNote);
        // console.log(docRef)

        const docRef = await addDoc(collection(db,`${uid}`, "journal/notes"),newNote);
        console.log(docRef)
        dipatch(activeNote(docRef.id,newNote))
    }
}


export const activeNote = (id,note) => ({

    type : types.notesActive,
    payload:{
        id,
        ...note
    }

})


export const startLoadingNotes = (uid) => {
    return async (dispatch)=> {
        const notesUser = await loadNotes(uid);
        dispatch(setNotes(notesUser))

    }
}

export const setNotes = (notes) => ({

    type: types.notesLoad,
    payload: notes

})