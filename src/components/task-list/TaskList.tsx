import { useState } from "react";

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
}

const tasksMock: Task[] = [
  {
    id: 1,
    name: "Task 1",
    description: "This is task 1",
    dueDate: new Date("2025/05/21"),
  },
  {
    id: 2,
    name: "Task 2",
    description: "This is task 2",
    dueDate: new Date("2025/06/21"),
  },
];

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
  const [tasksList, setTasksList] = useState(tasks || tasksMock || []);
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasksList.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
