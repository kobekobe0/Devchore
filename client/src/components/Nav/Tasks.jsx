import React, { useState } from 'react'
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
function Tasks() {
    const [show, setShow] = useState(false)

    const dropDown = () => {
        setShow(!show)
    }

    return (
        <div>
            <h2
                className="text-xs flex pointer-cursor hover:bg-slate-300 p-3 rounded-md font-semibold items-end"
                onClick={dropDown}
            >
                All tasks{' '}
                {show ? (
                    <MdOutlineKeyboardArrowUp size={15} />
                ) : (
                    <MdOutlineKeyboardArrowDown size={15} />
                )}
            </h2>
            <div
                id="dropdown"
                className={` ${
                    show ? 'block' : 'hidden absolute'
                }z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-300 absolute`}
            >
                <ul
                    className="py-1 text-sm text-black dark:text-gray-800"
                    aria-labelledby="dropdownDefault"
                >
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Task
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Member
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tasks
