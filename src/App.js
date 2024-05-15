import './App.css';
import TaskList from './Components/TaskList/TaskList'
import TaskBar from './Components/TaskBar/TaskBar';
import SearchBar from './Components/SearchBar/SearchBar';
import { useEffect, useMemo, useState } from 'react';

function App() {

  let taskArr = ["assignment","wash dishes","cook"]
  
  const [taskList, setTaskList] = useState(taskArr)
  const [query, setQuery] = useState("");

  function addTask(task){

      //check if input value is empty string
      if(task === ""){
        return;
      }

      //setTask("")
      //taskList.push(task)
      let newTaskList = [...taskList, task]
      setTaskList(newTaskList)
      //console.log(taskList)

  }

  function removeTask(index){

      let newTaskList = taskList.filter((x)=>{
        return x !== taskList[index]
      })
      setTaskList(newTaskList)

      //console.log(taskList);

  }

  //not optimized
  /*function searchTask(queryTask){

    const filteredList = taskArr.filter(task=>task.toLowerCase().includes(queryTask.toLowerCase()));

    console.log(filteredList);
    setTaskList(filteredList);

  }*/

  //optimized
  function searchTask(queryTask){

    setQuery(queryTask);

  }

  useEffect(()=>{
    let x = memoizedTaskList;
    console.log(x);
    setTaskList(x);
  },[query]);

  const memoizedTaskList = useMemo(()=>{
    
    console.log("memoizing");
    return taskArr.filter(task=>task.toLowerCase().includes(query.toLowerCase()));

  },[query]);

  return (
    <div className="App">
      <h1>To-do List</h1>
      <SearchBar searchTask={searchTask}/>
      <TaskBar addTask={addTask}/>
      <TaskList taskList={taskList} onRemoveTask={removeTask}/>
    </div>
  );
}

export default App;

//calculator input 2 num input box
//button + - * /
//set value to a new input box

