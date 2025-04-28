import React from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

const TaskList = ( {data} ) => {
  return (
    <div id='scroll' 
    className='gap-5 overflow-x-auto flex items-center justify-start h-[55%] mt-10 py-5 flex-nowrap'>
        {data.tasks.map((elem , idx) =>{
          if(elem.active){
            return  <AcceptTask key={idx} />
          }
          if(elem.NewTask){
            return  <NewTask key={idx} />
          }
          if(elem.completed){
            return  <CompleteTask key={idx} />
          }
          if(elem.failed){
            return  <FailedTask key={idx} />
          }
        })}
    </div>
  )
}

export default TaskList;