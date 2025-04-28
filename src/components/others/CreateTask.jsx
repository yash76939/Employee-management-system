import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-6 p-5 bg-[#1c1c1c] rounded'>
      <form className="flex w-full flext-wrap items-start justify-between">
        {/* Left column */}
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-800 border border-white mb-4 placeholder-gray-400"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-800 border border-white mb-4 placeholder-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-800 border border-white mb-4 placeholder-gray-400"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-gray-800 border border-white mb-4 placeholder-gray-400"
              type="text"
              placeholder="design, dev, etc..."
            />
          </div>
        </div>

        {/* Right column: Description and Button */}
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="text-sm py-1 px-2 w-full rounded outline-none bg-gray-800 border border-white mb-4 placeholder-gray-400"
            cols="30"
            rows="10"
            placeholder="Enter description..."
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
