import React from 'react'

const FailedTask = () => {
  return (
    <div className='bg-pink-400 h-full w-[300px] p-5 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm font-semibold px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm font-semibold'>2 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
             Lste non architecto nam dolores aliquam sint reprehenderit iure, odit sapiente nobis fuga debitis ipsam sunt tempore nihil quos libero aut.
            </p>

            <div className='mt-2'>
                <button className='w-full'> Failed</button>
            </div>
        </div>
  )
}

export default FailedTask