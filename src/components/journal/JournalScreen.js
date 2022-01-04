// import { NothingSelected } from "./NothingSelected"
import { NoteScreen } from "../notes/NoteScreen"
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {
    return (

        <div className="flex w-screen">
        <Sidebar />

        <main className="flex md:w-[70%] sm:w-1/2 w-1/2" >
            {/* <NothingSelected /> */}
            <NoteScreen/>
        </main>
        
        </div>

    )
}
