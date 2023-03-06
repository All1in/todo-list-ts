import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    const { taskName, deadline } = task
    return (
        <div className="task">
            <div className="content">
                <span>{taskName}</span>
                <span>{deadline}</span>
            </div>
            <button
                onClick={() => {
                    completeTask(taskName);
                }}
            >
                X
            </button>
        </div>
    );
};

export default TodoTask;
