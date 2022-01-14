import task from '../../assets/task.jpg'

export const JournalEntry = () => {
    return (
        <div className="flex bg-white p-2 my-3 rounded-lg flex-row">
            <div className="w-[30%] flex p-2">
                <img src={task} alt="" className='flex' />
            </div>
            <div className="w-[40%] flex p-2">
                <p>Lorem, ipsum dolor sit amet consectetur</p>
            </div>
            <div className="w-[30%] flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Monday</p>
                <p className="font-light">18</p>
            </div>

        </div>
    )
}
