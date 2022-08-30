import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import Finished from './Finished'
import InProgress from './InProgress'
import ToDo from './ToDo'
import ToReview from './ToReview'

function Project({ title, admin }) {
    const [show, setShow] = useState(false)
    const open = () => {
        setShow(!show)
    }
    return (
        <div className="flex flex-col  mx-4">
            <div
                className="border-b px-4 py-5 border-gray-400 rounded-lg flex justify-between cursor-pointer"
                onClick={open}
            >
                <div className="flex items-center">
                    {show ? (
                        <MdKeyboardArrowUp className="mr-4" />
                    ) : (
                        <MdKeyboardArrowDown className="mr-4" />
                    )}

                    <h2 className="font-medium">{title}</h2>
                </div>
                <div className="flex items-center">
                    {admin ? (
                        <h3 className="text-xs text-indigo-600">ADMIN</h3>
                    ) : null}
                </div>
            </div>
            <div
                className={`bg-gray-300 h-screen ${
                    show ? 'flex justify-around' : 'hidden'
                }`}
            >
                <ToDo />
                <InProgress />
                <ToReview />
                <Finished />
            </div>
        </div>
    )
}

export default Project
