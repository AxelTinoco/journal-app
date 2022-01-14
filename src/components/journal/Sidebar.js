import { GiWorld } from 'react-icons/gi'
import { BsCalendarPlus } from 'react-icons/bs'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const Sidebar = () => {

    const dispatch = useDispatch()

  const {name} = useSelector(state => state.auth)
 
  
    const handleLogout = () => {

       dispatch(startLogout())

    }



    return (
        <aside className="h-screen bg-[#02b3c5]  p-4 overflow-hidden w-[60%]  ">

            <div className="flex flex-col space-y-2 md:flex-row justify-between text-white">
                <div className="p-2 flex items-center space-x-2 justify-center text-center">
                    <GiWorld className='text-2xl'/> <h2>{name}</h2>
                </div>
                <button
                    className=" md:p-2 bg-black rounded-2xl hover:bg-white hover:text-black animated-things "
                    onClick={handleLogout}
                    >
                        Logout
                </button>
            </div>

            <div className='flex w-full justify-center flex-col items-center text-white mt-4'>
                <div className='group items-center flex flex-col p-0 cursor-pointer space-y-4'>
                    <BsCalendarPlus className='flex text-5xl group-hover:text-gray-300 transition-all' />
                    <p className=' group-hover:text-gray-300 '>Create a new entry</p>
                </div>

            </div>


            <JournalEntries />


        </aside>
    )
}
