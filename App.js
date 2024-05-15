import './App.css';
import TaskList from './TaskList/TaskList'
import { useState } from 'react';

function App() {

  let taskArr = ["assignment","wash dishes","cook"]
  
  const [taskList, setTaskList] = useState(taskArr)
  const [_task, setTask] = useState("")

  function addTask(){

      // let inputBox = document.getElementById("task-input")
      // let task = inputBox.value

      //check if input value is empty string
      if(_task === ""){
        return;
      }

      //setTask("")
      //taskList.push(task)
      let newTaskList = [...taskList, _task]
      setTaskList(newTaskList)
      console.log(taskList)

  }

  function removeTask(index){

      let newTaskList = taskList.filter((x)=>{
        return x !== taskList[index]
      })
      setTaskList(newTaskList)

      console.log(taskList);

  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <p>
        <input type='text' placeholder='Enter a task' value={_task} onChange={(e)=>{
          setTask(e.target.value)
          console.log(_task);
        }}/>
        <button onClick={addTask}>Add task</button>
      </p>
      <TaskList list={taskList} onRemoveTask={removeTask}/>
    </div>
  );
}

export default App;

//calculator input 2 num input box
//button + - * /
//set value to a new input box

