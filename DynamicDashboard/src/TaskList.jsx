const TaskList = () => {
    let tasks = [
        { taskName: "walk the frog", completed: false  },
        { taskName: "sing about singing", completed: true  },
        { taskName: "bake a pie", completed: false  },
        { taskName: "get dressed", completed: true  },
    ];
    let taskComplete = "U+2705";
    return (
        <ul>
       {tasks.map((task) => <li>{task.completed ? '\u2705' : '\u274c' } </li>) }    
        </ul>
    );
    
}

export default TaskList