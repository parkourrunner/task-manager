import { TASK_STATUES, TaskInfo } from "../ItemTypes";

export const tasksMock: TaskInfo[] = [
  {
    id: 1,
    name: "Task 1",
    description: "This is task 1",
    status: TASK_STATUES.FAILED,
    dueDate: new Date("2025/02/21 05:50"),
  },
  {
    id: 2,
    name: "Task 2",
    status: TASK_STATUES.DONE,
    description: "This is task 2",
    dueDate: new Date("2025/03/21 12:45"),
  },
  {
    id: 3,
    name: "Task 3",
    status: TASK_STATUES.DONE,
    description: "This is task 5",
    dueDate: new Date("2025/06/21 17:33"),
  },
  {
    id: 4,
    name: "Task 4",
    status: TASK_STATUES.PENDING,
    description: "This is task 4",
    dueDate: new Date("2025/07/21 : 22:12"),
  },
];