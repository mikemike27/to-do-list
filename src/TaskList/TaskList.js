import TaskItem from "../TaskItem/TaskItem"

function TaskList(props){

    return (
        <div>
            {
                props.list.map((x, index)=>{
                    return <TaskItem key={index} index={index} title={x} onRemoveTask={props.onRemoveTask}/>
                })
            }
        </div>
    )
}

export default TaskList


//todolist
//input box -> input a task -> button + add task
//each task "-"" button to remove the task