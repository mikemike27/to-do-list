import './TaskItem.css'

function TaskItem(props){

    function handleRemoveTask(){

        let index = props.index
        props.onRemoveTask(index)

        console.log(index);

    }

    return(
        <div className="container">
            <h2>{props.title}</h2>
            <button onClick={handleRemoveTask}>-</button>
        </div>
    )
}

export default TaskItem