import { useState } from "react";

function SearchBar(props){

    const [searchTask, setSearchTask] = useState("");

    function handleSubmit(e){

        e.preventDefault();

        props.searchTask(searchTask);

    }

    return(
        <div>
            <form>
                <input type="text" value={searchTask} placeholder="Search task" onChange={e=> setSearchTask(e.target.value)}/>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    );

}

export default SearchBar;