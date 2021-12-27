import { useState } from 'react'
import {GoEye,GoEyeClosed} from 'react-icons/go'
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'

export const FormState = ({changeClass}) => {

    const [view, setView] = useState(false)
    const [state, setState] = useState('password')

    const handleViewPassword = (e) => {
        e.preventDefault()
        setView(!view)

        if (view) {
            setState('password')
        }else{
            setState('text')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (

        <form 
        className = {`hidden md:flex col-start-8 col-end-12 row-start-2 row-end-6 rounded-3xl p-4 justify-center flex-col items-center space-y-10 border-b shadow-xl`}
        onSubmit={handleSubmit}
        >
            <h2 className='text-4xl ' >Register</h2>

           <div className='w-1/2 relative'>
            <input id='email' type="email" name="email" className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Your Email' />
            <label htmlFor="email" 
            className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
            peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
            '>Email</label>
           </div>


           <div className='w-1/2 relative'>
            <input id='password' type={state} name="password" 
            className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none '
             autoComplete='off' placeholder='Password' required
              />
            <label htmlFor="password" required
            className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
            peer-placeholder-shown:text-black peer-placeholder-shown:p-0
            '>Password</label>

            <button
            className='absolute right-2 p-2 '
            onClick={handleViewPassword}
            >
                {
                    (view) ? <GoEye className='text-xl' /> : <GoEyeClosed className=' text-xl '/>                   
                }

            </button>

            
           </div>
           
           <div className='flex justify-around flex-row border-t p-4 w-1/3'>

                <button className='mx-3'>
                    <FcGoogle className='text-3xl'/>
                </button>

                or

                <button className='mx-3'>
                <BsGithub className='text-3xl' />
                </button>

           </div>

        </form>
    )
}
