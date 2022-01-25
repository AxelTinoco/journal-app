import { useDispatch, useSelector } from "react-redux"
import { startSaveNote, startUpload } from "../../actions/notes"


export const NotesAppBar = () => {
    const dispatch = useDispatch()
    
    const {active} = useSelector(state => state.notes)
    
    const handleSave = () => {

        dispatch(startSaveNote(active))

    }
    
    const handlePictureUpload = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
       
        const file = e.target.files[0]

        if (file) {
            dispatch(startUpload(file))
        }

    }
    
    return (
        <div className='flex justify-between p-4 w-full bg-black text-white'>
            <span>26 de Diciembre 2021</span>

            <input 
                type="file" 
                name="file" 
                id="fileSelector" 
                className="hidden"
                onChange={handleFileChange}
                />

            <div className='flex space-x-5 mr-4'>
                <button
                    onClick={handlePictureUpload}
                    className='hover:text-primary hover:animated-things'

                    >
                    Picture
                </button>
                <button 
                    className='hover:text-primary hover:animated-things'
                    onClick={handleSave}
                    >
                    
                    Save</button>
            </div>
        </div>
    )
}
