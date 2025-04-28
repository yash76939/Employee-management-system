import React from 'react';

function TaskListNumber( {data} ) {
  return (
    <div className='text-white flex justify-between gap-5 screen mt-10'>
        <div className='bg-red-400 py-5 px-9 rounded-xl w-[40%]'>
            <h2 className='text-3xl font-semibold'> {data.taskNumbers.newTask} </h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-400 py-5 px-9 rounded-xl w-[40%]'>
            <h2 className='text-3xl font-semibold'> {data.taskNumbers.completed} </h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='bg-green-500 py-5 px-9 rounded-xl w-[40%]'>
            <h2 className='text-3xl font-semibold'> {data.taskNumbers.active} </h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='bg-yellow-600 py-5 px-9 rounded-xl w-[40%]'>
            <h2 className='text-3xl font-semibold'> {data.taskNumbers.failed} </h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber