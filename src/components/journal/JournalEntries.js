import { JournalEntry } from "./JournalEntry"

export const JournalEntries = () => {

    const entries = [1,2,3,4]

    return (
        <div className = 'w-full h-[82%] flex flex-col mt-4 overflow-y-scroll'>
           
        {
            entries.map(value => <JournalEntry key={value}/>)
        } 


        </div>
    )
}
