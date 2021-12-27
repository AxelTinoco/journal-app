import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className='flex justify-between p-4 w-full bg-black text-white'>
            <span>26 de Diciembre 2021</span>

            <div className='flex space-x-5 mr-4'>
                <button className='hover:text-primary hover:animated-things'>Picture</button>
                <button className='hover:text-primary hover:animated-things'>Save</button>
            </div>
        </div>
    )
}
