
export const JournalEntry = () => {
    return (
        <div className="my-2 w-full flex bg-white p-2 rounded-xl flex-col md:flex-row">
            <div className=' w-full h-full sm:w-1/3 bg-task bg-cover bg-center flex'>
            
            </div>

          <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className='p-2 flex items-center justify-center'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            </div>

            <div className="flex flex-col items-center justify-center p-2 w-1/4">
                <h3 className="text-2xl">Monday</h3>
                <p className="font-extralight">28</p>
            </div>
          </div>

        </div>
    )
}
