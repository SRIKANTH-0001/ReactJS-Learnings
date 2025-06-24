import React,{useState} from "react";

function ToDoList(){

    const [tasks,setTasks]=useState(["Wake up Early","Hydrate Your Body","Do some Exercise"]);
    const [newTasks,setNewTasks]=useState("");

    function handleInputChange(e){
        setNewTasks(e.target.value);
    }

    function addClick(e){
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
            setNewTasks("");
        }
    }

    function deleteTask(index){
        const afterDeletion = tasks.filter((_, i) => i !== index);
        setTasks(afterDeletion);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="ancient-container">
            <h1 className="ancient-title">📜 Ancients To-Do List</h1>
            <div className="input-area">
                <input 
                    type="text" 
                    placeholder="What must be done on today..."
                    value={newTasks}
                    onChange={handleInputChange}
                    className="ancient-input"
                />
                <button onClick={addClick} className="ancient-button">🖊 Seal the Task</button>
            </div>

            <ol className="ancient-scroll">
                {tasks.map((task, index) => (
                    <li key={index} className="ancient-item">
                        <span className="ancient-task">{task}</span>
                        <button className="ancient-action" onClick={() => deleteTask(index)}>🗑</button>
                        <button className="ancient-action" onClick={() => moveTaskUp(index)}>🔼</button>
                        <button className="ancient-action" onClick={() => moveTaskDown(index)}>🔽</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
