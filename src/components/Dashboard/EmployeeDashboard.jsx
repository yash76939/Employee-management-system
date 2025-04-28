import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ( {data} ) => {

  return (
    <div className='p-8 h-screen bg-[#1C1C1C]'>
        <Header data ={data} />
        < TaskListNumber data ={data} />
        < TaskList data ={data} />
    </div>
  )
}

export default EmployeeDashboard;