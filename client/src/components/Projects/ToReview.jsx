import TicketCard from './TicketCard'

const tasks = [
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
        _id: 'adaszqwea',
    },
]

function ToReview() {
    return (
        <div className="hideScroll flex flex-col w-full items-center mt-4">
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

export default ToReview
