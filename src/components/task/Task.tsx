import type { FC } from "react";

import { TASK_STATUES, TaskInfo } from "../../ItemTypes";

import "./Task.scss";

export interface TaskProps {
  task: TaskInfo;
  onToggleStatus: (task: TaskInfo) => void;
}

export const Task: FC<TaskProps> = ({ task, onToggleStatus }) => {
  let statusClass = "";
  switch (task.status) {
    case TASK_STATUES.DONE:
      statusClass = "done";
      break;
    case TASK_STATUES.FAILED:
      statusClass = "failed";
      break;
    default:
      statusClass = "todo";
  }
  return (
    <div className="task">
      <div className="checkbox-container">
        <input
          type="checkbox"
          className={statusClass}
          onClick={(_) => onToggleStatus(task)}
        />
      </div>
      <div className="info-container">
        <p>
          {task.dueDate.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <h4>{task.name}</h4>
      </div>
    </div>
  );
};
