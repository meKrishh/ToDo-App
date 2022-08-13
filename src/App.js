import React from "react";
import { useState } from "react";
import './App.css';
import './Todoo.css';
//import Task from './Task' ;

function Task({task}){
  return (
      <div className="task" style={ { textDecoration: task.completed ? "line-through" : "" } }>
      {task.title}
      </div>
  );
}

function App() {
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


  return (
    <div className="App">

        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
                <div className="tasks">
                { tasks.map((task,index)=>(
                  < Task task={task}  index={index} />
                )) }
            </div>
        </div>
    
    </div>
  );
}

export default App;
