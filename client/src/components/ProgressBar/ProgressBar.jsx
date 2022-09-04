import React from 'react'
import ProgressButton from './ProgressButton'

const buttons = ['✍️To-do', '⏳In-progress', '🔍To-review', '💎Finished']

function ProgressBar() {
    return (
        <div className="flex w-full bg-white py-3 my-2 justify-around  border-gray-400">
            {buttons.map((button) => (
                <ProgressButton key={button} button={button} />
            ))}
        </div>
    )
}

export default ProgressBar
