import { useState } from 'react'

function Add() {
    const [show, setShow] = useState(false)
    const dropDown = () => {
        setShow(!show)
    }
    return (
        <div className="flex flex-col items-center">
            <button
                onClick={dropDown}
                className="bg-blue-600 text-white p-1 px-2 text-sm font-semibold rounded-md"
            >
                Add +
            </button>
            <div
                id="dropdown"
                className={` ${
                    show ? 'block' : 'hidden absolute'
                }z-10 w-40 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-300 absolute mt-8`}
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
            <div
                style={{ backgroundColor: 'rgb(0,0,0,0.7)' }}
                className="hidden flex items-center justify-center absolute m-auto top-0 left-0 bottom-0 h-screen w-screen bg-slate-200"
            >
                <div className="h-3/5 w-2/5 bg-slate-300 rounded-md -lg:w-8/12 -md:w-10/12">
                    modal
                </div>
            </div>
        </div>
    )
}

export default Add
