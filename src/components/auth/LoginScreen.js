import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward, IoIosAddCircleOutline } from 'react-icons/io'
import { FormLoginState } from '../FormLoginState';

export const LoginScreen = () => {

   
    const [showLogin, setShowLogin] = useState(false)
  


    const handleShowRegisterForm = () => {



    }

    const handleShowLoginForm = () => {

        setShowLogin(!showLogin)

    }

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-screen md:bg-pattern bg-[#02b3c5]">
            <div className=" bg-login col-span-12 row-span-full  rounded-b-[4rem] bg-top flex 
            flex-col justify-around items-center shadow-2xl shadow-primary
             md:bg-cover md:col-span-6 md:row-span-6 md:rounded-r-[1rem] md:rounded-bl-none text-white ">
                <div className=" w-full text-center text-3xl font-bold sm:text-5xl md:text-7xl">Logo</div>
                <div className="w-1/3 text-center">
                    <h2 className="text-3xl font-bold sm:text-5xl md:text-7xl bg-clip-text">Welcome</h2>
                    <p className="text-[#dfdfdf]"></p>
                </div>

                <div className="w-1/3 text-center">
                    <p className="text-[#dfdfdf]">Login please.</p>
                </div>



                <IoIosArrowDown className={'text-3xl animate-bounce md:hidden'} />
                <IoIosArrowForward className={'animate-bounce_right md:text-5xl hidden md:flex'} />

            </div>

            <div className="col-span-12 flex p-4 justify-around text-center md:col-span-6 text-white space-y-2">

                <div className="w-1/2  flex justify-center items-center text-xl">
                   <button 
                        className='flex items-center'
                        onClick={handleShowLoginForm}
                        >
                    Login <IoIosArrowForward className='ml-2' />
                   </button>
                </div>

                <div className="w-1/2 flex justify-center items-center text-xl">
                    <button 
                        className='flex items-center'>New <IoIosAddCircleOutline className='ml-2' 
                        onClick={ handleShowRegisterForm }
                        />
                    </button>
                </div>
            </div>

            <FormLoginState showLogin={showLogin} />




        </div>
    )
}
