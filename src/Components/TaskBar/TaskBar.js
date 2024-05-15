import { useState } from "react";

function TaskBar(props){

    const [task, setTask] = useState("");

    function handleAddTask(){

        props.addTask(task);

        setTask("");

    }

    return(
        <div>
            <input type='text' placeholder='Enter a task' value={task} onChange={(e)=>{
                setTask(e.target.value)
                //console.log(_task);
            }}/>
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );

}

export default TaskBar;