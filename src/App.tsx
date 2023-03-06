import React, {FC, ChangeEvent,  useState} from 'react';
import { ITask } from "./interfaces"
import TodoTask from "./components/TodoTask";
import './styles/App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

  const addTask = (): void => {
      const newTask = {
          taskName: task,
          deadline: deadline
      }
      if(task !== "") setTodoList([...todoList, newTask]);
      setTask("");
      setDeadline(0);
  }

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskName !== taskNameToDelete;
            })
        );
    };

  return (
    <div className="App">
        <div className="header">
            <div className="inputContainer">
               <input
                   type="text"
                   placeholder="Task..."
                   value={task}
                   name="task"
                   onChange={handleChange}
               />
               <input
                   type="number"
                   name="deadline"
                   value={deadline}
                   onChange={handleChange}
                   placeholder="Deadline (in Days)..."
               />
            </div>
               <button className='btn-click' onClick={addTask}>Add Task</button>
        </div>
        <div className="todoList">
            {todoList.map((task: ITask, key: number) => (
               <TodoTask
                   key={key}
                   task={task}
                   completeTask={completeTask}
               />
            ))}
            { todoList.length === 0 && task === "" ? <h1>Task field mustn't be empty</h1> : false}
        </div>
    </div>
  );
}

export default App;
