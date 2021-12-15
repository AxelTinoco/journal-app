import {IoIosArrowDown} from 'react-icons/io'

export const RegisterScreen = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-6 h-screen bg-[#02B3C5] text-white">
            <div className=" bg-register col-span-12 row-span-5 bg-cover rounded-b-[3rem] flex flex-col justify-around items-center">
                <div className=" w-full text-center text-3xl">Logo</div>
                <div className="w-1/3 text-center">
                    <h2 className="text-3xl">Welcome</h2>
                    <p className="text-[#d8adbc]">to lonely planet,we are the heart of globetrotting.</p>
                </div>
            
            <IoIosArrowDown className='text-3xl animate-bounce'/>
            </div>
            
            <div className="col-span-12 flex  p-4 justify-around text-center">

                    <div className="w-1/2 pt-4">
                        Login
                    </div>

                    <div className="w-1/2 pt-4">
                        New
                    </div>
            </div>
        </div>
    )
}
