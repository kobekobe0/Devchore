import TicketCard from './TicketCard'

const tasks = [
    {
        description: 'A new ticket',
        projectId: '1231209dsndasd',
        comments: [],
        handlers: ['user1ID', 'user2ID'],
        title: 'Fix the Modal',
        createdBy: 'user1ID',
        status: 'TODO',
        priority: 'HIGH',
        createdAt: 'May 15, 2022',
        _id: 'cjnaodkasd',
    },
    {
        description: 'A new ticket 2',
        projectId: '1231209dsssndasd',
        comments: [],
        handlers: ['user1ID'],
        title: 'Make a juice',
        createdBy: 'user2ID',
        status: 'TODO',
        priority: 'LOW',
        createdAt: 'May 16, 2022',
        _id: 'hbcoqwihqwd',
    },
    {
        description: 'A new ticket 3',
        projectId: '1231209dsndasd',
        comments: [],
        handlers: ['user2ID'],
        title: 'Get pull request from a user endpoint',
        createdBy: 'user1ID',
        status: 'TODO',
        priority: 'MID',
        createdAt: 'May 17, 2022',
        _id: 'asdikasndnxc',
    },
    {
        description: 'A new ticket 3',
        projectId: '1231209dsndasd',
        comments: [],
        handlers: ['user2ID'],
        title: 'Get pull request from a user endpoint',
        createdBy: 'user1ID',
        status: 'TODO',
        priority: 'MID',
        createdAt: 'May 17, 2022',
        _id: 'asdcxrgrerr',
    },
]

const ToDo = () => {
    return (
        <div className="hideScroll flex flex-col w-full items-center mt-4 overflow-y-auto">
            {tasks?.map((task) => (
                <div
                    key={task._id}
                    className="w-full flex flex-col items-center"
                >
                    <TicketCard details={task} />
                </div>
            ))}
            <h2>+ Add new task</h2>
        </div>
    )
}

export default ToDo
