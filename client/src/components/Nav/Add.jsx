import { useState } from 'react'
import CreateModal from '../Modals/CreateModal'

function Add() {
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState('')
    const dropDown = () => {
        setShow(!show)
    }

    const modalShow = (modal) => {
        setShow(false)
        setModalType(modal)
        setShowModal(true)
    }

    const closeModal = () => {
        setModalType('')
        setShowModal(false)
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
                    <li onClick={() => modalShow('project')}>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Project
                        </a>
                    </li>
                    <li onClick={() => modalShow('ticket')}>
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Ticket
                        </a>
                    </li>
                    <li onClick={() => modalShow('member')}>
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
            {showModal && (
                <CreateModal
                    showModal={showModal}
                    closeModal={closeModal}
                    modalType={modalType}
                />
            )}
        </div>
    )
}

export default Add
