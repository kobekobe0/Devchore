import { MdSystemUpdateAlt } from 'react-icons/md'
import p1 from '../../imgs/p1.jpg'
import { BiCommentDetail } from 'react-icons/bi'
import { useState } from 'react'

function TicketCard({ details }) {
    const [show, setShow] = useState(false)
    return (
        <div className="bg-white mb-7 rounded-3xl shadow-lg w-4/5 flex items-center justify-center">
            <div className="flex flex-col w-full p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-700">
                        {details.title}
                    </h1>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShow(!show)}
                            className="text-xs border bg-indigo-400 border-indigo-500 py-1  px-2 ml-5 rounded-xl h-fit"
                        >
                            <MdSystemUpdateAlt style={{ color: 'white' }} />
                        </button>
                        <div
                            id="dropdown"
                            className={` ${
                                show ? 'block absolute' : 'hidden absolute'
                            }z-10 w-40 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-200 opacity-90 absolute mt-8`}
                        >
                            <ul
                                className="py-1 text-sm text-black dark:text-gray-800 cursor-pointer"
                                aria-labelledby="dropdownDefault"
                            >
                                <li onClick={() => setShow(false)}>
                                    <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        To Do
                                    </a>
                                </li>
                                <li onClick={() => setShow(false)}>
                                    <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        In Progress
                                    </a>
                                </li>
                                <li onClick={() => setShow(false)}>
                                    <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        To Review
                                    </a>
                                </li>
                                <li onClick={() => setShow(false)}>
                                    <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Finished
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`${details.priority == 'HIGH' && 'bg-red-400'} ${
                        details.priority == 'MID' && 'bg-blue-300'
                    } ${
                        details.priority == 'LOW' && 'bg-green-400'
                    } text-sm w-fit px-2 rounded-xl mt-2 text-white`}
                >
                    {details.priority.toLowerCase()}
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <img
                            src={p1}
                            className="w-8 h-8 object-cover rounded-full mt-2 "
                        />
                    </div>
                    <div className="flex items-center">
                        <h5 className="text-xs mr-3 text-center">
                            {details.createdAt}
                        </h5>
                        <div className="flex items-center">
                            <BiCommentDetail />
                            {details.comments.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard
