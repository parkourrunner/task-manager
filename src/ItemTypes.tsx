export const TASK_STATUES = {
  PENDING: 'PENDING',
  FAILED: "FAILED",
  DONE: 'DONE',
} as const;

export type TaskInfo = {
  id: number;
  name: string;
  status: typeof TASK_STATUES[keyof typeof TASK_STATUES];
  description: string;
  dueDate: Date;
};
