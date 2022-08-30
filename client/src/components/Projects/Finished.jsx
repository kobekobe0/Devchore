import TicketCard from './TicketCard'

const tasks = []

function Finished() {
    return (
        <div className="hideScroll flex flex-col w-full items-center mt-4">
            {tasks?.map((task) => (
                <div className="w-full flex flex-col items-center">
                    <TicketCard details={task} />
                </div>
            ))}
            <h2>+ Add new task</h2>
        </div>
    )
}

export default Finished
