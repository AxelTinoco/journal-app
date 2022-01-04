import { useState } from 'react'
import {GoEye,GoEyeClosed} from 'react-icons/go'
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startLoginEmailPasword } from '../actions/auth'
// import { login } from '../actions/auth'

export const FormLoginState = ({showLogin}) => {

    const [view, setView] = useState(false)
    const [state, setState] = useState('password')

    const dispatch = useDispatch()
    

    const [formValues,handleInputChange] = useForm({
        email: '',
        password: ''

    })

    const {email,password} = formValues;

    const handleViewPassword = () => {
    
        setView(!view)

        if (view) {
            setState('password')
        }else{
            setState('text')
        }
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,password)
        dispatch(startLoginEmailPasword(email,password))
    }
    
    const handleStartGoogleLogin = () => {
        
        dispatch(startGoogleLogin())


    }

   

    return (

        <form 
        className = {showLogin ? `flex self-center justify-self-center backdrop-blur-md absolute  rounded-3xl p-4 
                                justify-center flex-col items-center space-y-10 shadow-xl animate__animated animate__zoomIn`
                    :
                      `hidden md:flex col-start-8 col-end-12 row-start-2 row-end-6 rounded-3xl p-4 
                         justify-center flex-col items-center space-y-10 border-b shadow-xl animated-things`

                    }
        onSubmit={handleSubmit}
        >
            <h2 className='text-4xl text-white md:text-black ' >Login</h2>
      
           <div className='md:w-1/2 relative w-full'>
            <input id='email' type="email" name="email" 
            value={email}  onChange={handleInputChange}
            className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none' autoComplete='off' placeholder='Your Email' />
            <label htmlFor="email" 
            className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
            peer-placeholder-shown:text-black peer-placeholder-shown:p-0 
            '>Email</label>
           </div>


           <div className='md:w-1/2 relative w-full'>
            <input id='password' type={state} name="password"
            value={password} onChange={handleInputChange}
            className='peer w-full relative p-2 placeholder-transparent rounded-xl border-b-4 shadow-md focus:outline-none '
             autoComplete='off' placeholder='Password' required
              />
            <label htmlFor="password" required
            className='absolute left-2 text-white text-sm -top-6 bg-black p-1 rounded
            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:bg-transparent 
            peer-placeholder-shown:text-black peer-placeholder-shown:p-0
            '>Password</label>

            {
                (view) 
                ? 
                <GoEye className='text-xl absolute right-2 top-2 cursor-pointer' onClick={handleViewPassword} /> 
                :<GoEyeClosed className=' text-xl right-2 top-2 absolute cursor-pointer' onClick={handleViewPassword}/> 
            }

            <button 
            type='submit'
            onSubmit={handleSubmit}
            className='bg-primary p-2 rounded-2xl my-4 w-full text-white shadow-xl'
            >
                Login
            </button>

            
           </div>
           
           
           <div className='flex justify-around flex-row border-t p-4 w-1/3 text-white md:text-black mt-0'>
           
                   <div className='flex mx-3'>
                   <FcGoogle className='text-3xl cursor-pointer' onClick={handleStartGoogleLogin}/>
                   </div>
                

                or

                <div className='mx-3 flex'>
                <BsGithub className='text-3xl cursor-pointer' />
                </div>

           </div>

        </form>
    )
}
