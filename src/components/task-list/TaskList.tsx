import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";

import { Task } from "../task/Task";
import { TASK_STATUES, TaskInfo } from "../../ItemTypes";
import { DNDItem } from "../dnd-item/DNDItem";

import "./TaskList.scss";

interface TaskListProps {
  tasksList: TaskInfo[];
}

export const TaskList: FC<TaskListProps> = ({
  tasksList = [],
}: TaskListProps) => {
  const [tasks, setTasks] = useState(tasksList);

  const moveTask = useCallback((dragIndex: number, hoverIndex: number) => {
    setTasks((prevTasks: TaskInfo[]) =>
      update(prevTasks, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTasks[dragIndex] as TaskInfo],
        ],
      })
    );
  }, []);
  const handletoggleStatus = useCallback((task: TaskInfo) => {
    let newStatus = task.status;
    if (task.status === TASK_STATUES.PENDING) {
      newStatus = TASK_STATUES.DONE;
    } else if (task.status === TASK_STATUES.DONE) {
      newStatus = TASK_STATUES.PENDING;
    }

    setTasks((prevTasks: TaskInfo[]) => {
      const newTasks = prevTasks.map((prevTask) => {
        if (prevTask.id === task.id) {
          return { ...prevTask, status: newStatus };
        }
        return prevTask;
      });
      return newTasks;
    });
  }, []);
  const renderTask = useCallback(
    (task: TaskInfo, index: number) => {
      return (
        <DNDItem
          index={index}
          moveItem={moveTask}
          id={task.id}
          type="task"
          key={task.id}
        >
          <Task task={task} onToggleStatus={handletoggleStatus} />
        </DNDItem>
      );
    },
    [moveTask]
  );

  return (
    <>
      <div className="task-list">
        {tasks.map((task, index) => renderTask(task, index))}
      </div>
    </>
  );
};
