import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import Task from './task';

type TasksState = {
  list: Task[];
};

const initialState: TasksState = {
  list: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
        priority: action.payload.priority,
        date: action.payload.date,
      };
      state.list.push(newTask);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
