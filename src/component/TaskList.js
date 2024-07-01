import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTask,toggleTask,editTask } from '../store/taskSlice';

const TaskList = () => {

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editingTask, setEditingTask] = useState(null);
    const [newText, setNewText] = useState('');

    const handleEdit = (task) => {
        setEditingTask(task.id);
        setNewText(task.text);
    };

    const handleSave = (taskId) => {
        dispatch(editTask({ id: taskId, text: newText }));
        setEditingTask(null);
        setNewText('');
    };

    return (
        <div>
            <ul className='list-group'>
                {tasks.map((task) => (
                    <li key={task.id} className='list-group d-flex justify-content-between align-items-center'>
                        {
                            editingTask === task.id ? (
                                <>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                    />
                                    <button className='btn btn-success ms-2' onClick={() => handleSave(task.id)}> Save</button>
                                </>
                            ) : (
                                <>
                                    <span
                                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                        onClick={() => dispatch(toggleTask(task.id))}
                                    >
                                        {task.text}
                                    </span>

                                    <div>
                                        <button className="btn btn-warning me-2" onClick={() => handleEdit(task)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                    </div>
                                </>
                            )
                        }
                    </li>
                ))

                }
            </ul>
        </div>
    )
}

export default TaskList