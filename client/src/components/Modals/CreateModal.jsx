import { AiFillCloseCircle } from 'react-icons/ai'
import { MdTitle } from 'react-icons/md'
import { FaRegNewspaper, FaUserPlus } from 'react-icons/fa'
import { useState } from 'react'
function ProjectModal({ showModal, closeModal, modalType }) {
    return (
        <div
            style={{ backgroundColor: 'rgb(0,0,0,0.7)' }}
            className={` ${
                showModal ? 'flex' : 'hidden'
            } items-center justify-center absolute m-auto top-0 left-0 bottom-0 h-screen w-screen`}
        >
            <div className="h-fit w-2/5 bg-gradient-to-t from-rose-100 to-teal-100 rounded-md -lg:w-8/12 -md:w-10/12 px-9">
                <div
                    onClick={closeModal}
                    className="w-full flex items-center justify-between py-5 rounded-t-md"
                >
                    <h3 className="text-2xl font-semibold py-3 font-sans">
                        Create a Project
                    </h3>
                    <AiFillCloseCircle color="red" />
                </div>
                <div>
                    <form action="">
                        <label
                            for="title-icon"
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-600"
                        >
                            Project Title
                        </label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <MdTitle />
                            </div>
                            <input
                                type="text"
                                id="title-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your Project Title"
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-8 mb-9 float-right text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

//only allow to assign if the user is the admin of the project
function TicketModal({ showModal, closeModal }) {
    const [openProjectSelect, setOpenProjectSelect] = useState(false)
    const [openAssignSelect, setOpenAssignSelect] = useState(false)

    const openSelectProject = () => {
        setOpenProjectSelect(!openProjectSelect)
    }
    const openSelectAssign = () => {
        setOpenAssignSelect(!openAssignSelect)
    }

    return (
        <div
            style={{ backgroundColor: 'rgb(0,0,0,0.7)' }}
            className={` ${
                showModal ? 'flex' : 'hidden'
            } items-center justify-center absolute m-auto top-0 left-0 bottom-0 h-screen w-screen`}
        >
            <div className="h-fit w-2/5 bg-gradient-to-t from-rose-100 to-teal-100 rounded-md -lg:w-8/12 -md:w-10/12 px-9">
                <div
                    onClick={closeModal}
                    className="w-full flex items-center justify-between py-5 rounded-t-md"
                >
                    <h3 className="text-2xl font-semibold py-3 font-sans">
                        Create a Ticket
                    </h3>
                    <AiFillCloseCircle color="red" />
                </div>
                <div className="">
                    <div className="flex flex-col w-full">
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            class="text-gray-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={openSelectProject}
                        >
                            Choose Project{' '}
                            <svg
                                class="ml-2 w-4 h-4"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        <div
                            id="dropdownUsers"
                            className={`z-10 mt-1 disabled bg-white rounded shadow dark:bg-gray-700`}
                        >
                            <ul
                                className={`${
                                    openProjectSelect ? 'block' : 'hidden'
                                } overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200`}
                                aria-labelledby="dropdownUsersButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Jese Leos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Robert Gough
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Bonnie Green
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Leslie Livingston
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Michael Gough
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Joseph Mcfall
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Roberta Casas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Neil Sims
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button
                            id="dropdownUsersButton"
                            data-dropdown-toggle="dropdownUsers"
                            data-dropdown-placement="bottom"
                            class="text-gray-700 mt-2 mb-4 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={openSelectAssign}
                        >
                            Assign handler{' '}
                            <svg
                                class="ml-2 w-4 h-4"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={openSelectAssign}
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        <div
                            id="dropdownUsers"
                            className=" z-10 mt-1  bg-white rounded shadow dark:bg-gray-700"
                        >
                            <ul
                                className={`${
                                    openAssignSelect ? 'block' : 'hidden'
                                } overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200`}
                                aria-labelledby="dropdownUsersButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Jese Leos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Robert Gough
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Bonnie Green
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Leslie Livingston
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Michael Gough
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Joseph Mcfall
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Roberta Casas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Neil Sims
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form action="">
                        <label
                            for="title-icon"
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-600"
                        >
                            Ticket Title
                        </label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <MdTitle />
                            </div>
                            <input
                                type="text"
                                id="title-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your Ticket Title"
                            />
                        </div>
                        <label
                            for="title-icon"
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-600"
                        >
                            Ticket Description
                        </label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <FaRegNewspaper />
                            </div>
                            <input
                                type="text"
                                id="title-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your Ticket Description"
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-8 mb-9 float-right text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function MemberModal({ showModal, closeModal }) {
    const [openAddButton, setOpenAddButton] = useState(false)
    return (
        <div
            style={{ backgroundColor: 'rgb(0,0,0,0.7)' }}
            className={` ${
                showModal ? 'flex' : 'hidden'
            } items-center justify-center absolute m-auto top-0 left-0 bottom-0 h-screen w-screen`}
        >
            <div className="h-fit w-2/5 bg-gradient-to-t from-rose-100 to-teal-100 rounded-md -lg:w-8/12 -md:w-10/12 px-9">
                <div
                    onClick={closeModal}
                    className="w-full flex items-center justify-between py-5 rounded-t-md"
                >
                    <h3 className="text-2xl font-semibold py-3 font-sans">
                        Add Member
                    </h3>
                    <AiFillCloseCircle color="red" />
                </div>
                <div className="flex flex-col">
                    <button
                        id="dropdownUsersButton"
                        data-dropdown-toggle="dropdownUsers"
                        data-dropdown-placement="bottom"
                        className="text-gray-800 mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        onClick={() => setOpenAddButton(!openAddButton)}
                    >
                        Choose Project{' '}
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>

                    <div
                        id="dropdownUsers"
                        className={`z-10 mt-1 disabled bg-white rounded shadow dark:bg-gray-700`}
                    >
                        <ul
                            className={`${
                                openAddButton ? 'block' : 'hidden'
                            } overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200`}
                            aria-labelledby="dropdownUsersButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Jese Leos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Robert Gough
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Bonnie Green
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Leslie Livingston
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Michael Gough
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Joseph Mcfall
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Roberta Casas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Neil Sims
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <FaUserPlus />
                    </div>
                    <input
                        type="text"
                        id="title-icon"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search an individual"
                    />
                </div>
                <button
                    type="button"
                    className="mt-6 mb-10 float-right text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

function CreateModal({ showModal, closeModal, modalType }) {
    return (
        <div>
            {modalType == 'project' && (
                <ProjectModal
                    closeModal={closeModal}
                    showModal={showModal}
                    modalType={modalType}
                />
            )}
            {modalType == 'ticket' && (
                <TicketModal closeModal={closeModal} showModal={showModal} />
            )}
            {modalType == 'member' && (
                <MemberModal closeModal={closeModal} showModal={showModal} />
            )}
        </div>
    )
}

export default CreateModal
