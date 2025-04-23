type Task = {
  id?: string;
  title: string;
  description: string;
  status: 'to-do' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  date: string;
};

export default Task;
