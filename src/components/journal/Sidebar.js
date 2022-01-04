import {GiWorld} from 'react-icons/gi'
import {BsCalendarPlus} from 'react-icons/bs'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="h-screen bg-[#02b3c5]  p-4 overflow-hidden">
            
            <div className="flex flex-row justify-between text-white">
            <div className="p-2 flex items-center space-x-2">
                <GiWorld/> <h2>Axel</h2>   
            </div>
            <button className="p-2 bg-black rounded-2xl hover:bg-white hover:text-black transition-all">Logout</button>
            </div>
            
            <div className='flex w-full justify-center flex-col items-center text-white'>
            <div className='group items-center flex flex-col p-0 cursor-pointer space-y-4'>
            <BsCalendarPlus className='flex text-5xl group-hover:text-gray-300 transition-all' />
            <p className=' group-hover:text-gray-300 '>Create a new entry</p>
            </div>

            </div>

            
                <JournalEntries />
            

        </aside>
    )
}
