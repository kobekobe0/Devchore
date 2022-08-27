function ProgressButton({ button }) {
    return (
        <div className="py-2 text-lg antialiased font-semibold hover:bg-slate-300 w-full flex justify-center">
            <h2>{button}</h2>
            <div className="ml-1 bg-gray-300 px-3 rounded-xl">0</div>
        </div>
    )
}

export default ProgressButton
