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
    },
]

const ToDo = () => {
    return (
        <div className="flex flex-col w-full items-center mt-4">
            {tasks.map((task) => (
                <div className="w-full flex flex-col items-center">
                    <TicketCard details={task} />
                </div>
            ))}
        </div>
    )
}

export default ToDo
