import React, { useState,useEffect } from 'react';
import './ToDo.css';

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value)
        return;
        else
        addTask(value);

    }

    return (
        <form onSubmit = { handleSubmit } >
        <input type = "text"  placeholder="Add a new task" value={value} onChange = { e=>{ setValue(e.target.value)  } }    />
        </form>
    )
}




function Task({task,index,completeTask,removeTask}){
    return (
        <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.title}
        <button style={ {background : "red" }} onClick={()=>{
         removeTask(index)
        }}>X</button>
        <button onClick={()=>{
         completeTask(index)
        }}>Completed</button>
        
        </div>
       
    );
}



function ToDo(){

    const[tasksRemaining,setTasksRemaining] = useState(0);

    useEffect( ()=>{
        setTasksRemaining( tasks.filter(task=>task.completed==false).length ) 
    } )

    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    const addTask = (title)=>{
        const newTask = [...tasks,{title, completed:false}];
        setTasks(newTask);
    }

    const completeTask = (index)=>{
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    }

    const removeTask = (index)=>{
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
    }

    return(
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
                <div className="tasks">
                {  tasks.map( (task,index)=> 
                 <Task task = {task} index ={index} completeTask= {completeTask}  removeTask={removeTask}/>
                            ) }
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
        </div>
    )
}

export default ToDo;

