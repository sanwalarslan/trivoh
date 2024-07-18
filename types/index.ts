// types/index.ts
export interface Task {
  title: string;
  description: string;
  dueDate: string;
  category: keyof TaskState;  // Ensure `category` is a key of `TaskState`
}

export interface TaskState {
  todo: Task[];
  inProgress: Task[];
  inReview: Task[];
  done: Task[];
}
// types.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
