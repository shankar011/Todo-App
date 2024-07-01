import React, { useState } from 'react'
import { addTask } from '../store/taskSlice'
import { useDispatch } from 'react-redux';

const TaskInput = () => {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

   const handleAddTask = (e) =>{
        if(task.trim()){
            dispatch(addTask(task));
            setTask('');
        }
    }

  return (
    <div className='input-group mb-3'>
        <input 
            type='text'
            className='form-control'
            placeholder='Enter Task'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
        />
        <button className='btn btn-primary' onClick={handleAddTask} >Add</button>
    </div>
  )
}

export default TaskInput;