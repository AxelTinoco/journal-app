// import { NothingSelected } from "./NothingSelected"
import { NoteScreen } from "../notes/NoteScreen"
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {
    return (

        <div className="flex">
        <Sidebar />

        <main className="flex w-[80%]">
            {/* <NothingSelected /> */}
            <NoteScreen/>
        </main>
        
        </div>

    )
}
