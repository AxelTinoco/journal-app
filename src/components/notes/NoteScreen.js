import { NotesAppBar } from "./NotesAppBar";
import imgText from "../../assets/imgText.jpg"

export const NoteScreen = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <NotesAppBar/>

            <div className="p-4 flex flex-col space-y-5 h-full">
                <input 
                type="text" 
                placeholder="Awesome title here!"
                className="text-4xl p-2"
                autoComplete="off"
                />

                <textarea name="" id="" className="resize-none flex-auto p-4" placeholder="Type here!...." ></textarea>
                
            </div>

            <div className="flex w-1/5 p-4">
                <img src={imgText} alt="flor" className="w-full h-full" />
            </div>

        </div>
    )
}
