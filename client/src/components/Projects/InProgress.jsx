import TicketCard from './TicketCard'

const tasks = [
    {
        description: 'Create a new listing for the said items',
        projectId: '1231209dsndasd',
        comments: [],
        handlers: ['user1ID', 'user2ID'],
        title: 'Create a new listing for the said items',
        createdBy: 'user1ID',
        status: 'TODO',
        priority: 'MID',
        createdAt: 'May 15, 2022',
    },
    {
        description: 'reduce the latency used by the server',
        projectId: '1231209dsssndasd',
        comments: [],
        handlers: ['user1ID'],
        title: 'reduce the latency used by the server',
        createdBy: 'user2ID',
        status: 'TODO',
        priority: 'LOW',
        createdAt: 'May 16, 2022',
    },
]

function InProgress() {
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

export default InProgress
