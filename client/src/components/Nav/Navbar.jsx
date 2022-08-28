import p1 from '../../imgs/p1.jpg'
import Tasks from './Tasks'
import Add from './Add'
function Navbar() {
    return (
        <div className="flex w-full h-full bg-stone-200 px-4 py-2 border-b border-gray-400 cursor-pointer items-center justify-between">
            <h1 className="text-lg text-indigo-700 font-bold">
                Dev
                <span className="text-base text-black font-normal">Chore</span>
            </h1>

            <div className="ml-6 flex items-center justify-between w-full">
                <Tasks />
                <div className="flex items-center gap-6">
                    <Add />
                    <button
                        id="dropdownNotificationButton"
                        data-dropdown-toggle="dropdownNotification"
                        className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                        type="button"
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                        </svg>
                        <div className="flex relative">
                            <div className="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                        </div>
                    </button>
                    <button
                        id="dropdownUserAvatarButton"
                        data-dropdown-toggle="dropdownAvatar"
                        className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        type="button"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-8 h-8 rounded-full object-cover"
                            src={p1}
                            alt="user photo"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
