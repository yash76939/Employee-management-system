import React from 'react'

function NewTask() {
  return (
    <div className='bg-green-300 h-full w-[400px] p-5 rounded-xl flex-shrink-0'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-sm font-semibold px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm font-semibold'>2 Feb 2025</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
    <p className='text-sm mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste non architecto nam dolores aliquam sint reprehenderit iure, odit sapiente nobis fuga debitis ipsam sunt tempore nihil quos libero aut.
    </p>

    <div className='mt-4'>
        <button>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask