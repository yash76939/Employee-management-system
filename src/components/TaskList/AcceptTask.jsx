import React from 'react'

const AcceptTask = () => {
    return (
        <div className='bg-red-400 h-full w-[400px] p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm font-semibold px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm font-semibold'>2 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit bus nam dolores aliquam sint reprehenderit iure, odit sapiente nobis fuga debitis ipsam sunt tempore nihil quos libero aut.
            </p>

            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>mark as Failed</button>
            </div>
        </div>

    )
}

export default AcceptTask;