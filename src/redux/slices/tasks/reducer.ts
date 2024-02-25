import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { TaskType } from "../../../types";

export type TasksState = TaskType[];

const initialState: TasksState = [
  {
    id: "dcf6c7ea-56fe-4e36-960b-686ebf86d651",
    name: "Задача",
    description: "Описание может быть длинным",
    category: "d485a644-5a24-4f55-b3f7-a083338be879",
  },
  {
    id: "8c90d466-4d2b-4813-a5b4-110b014bf7f2",
    name: "Задача2",
    description: "Описание может быть длинным",
    category: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
  },
  {
    id: "5a034ea1-6159-4805-a4be-e8c160d8ef10",
    name: "Задача3",
    description: "Описание может быть длинным",
    category: "",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state: TasksState,
      { payload }: PayloadAction<Omit<TaskType, "id">>,
    ) => {
      return [
        ...state,
        {
          ...payload,
          id: uuidv4(),
        },
      ];
    },
    updateTask: (
      state: TasksState,
      { payload: updatedItem }: PayloadAction<TaskType>,
    ) => {
      const idx = state.findIndex(({ id }) => id === updatedItem.id);

      idx !== -1 && state.splice(idx, 1, updatedItem);
    },
    deleteTask: (
      state: TasksState,
      { payload }: PayloadAction<string>,
    ) => {
      const idx = state.findIndex(({ id }) => id === payload);

      idx !== -1 && state.splice(idx, 1);
    },
    unbindDeletedCategory: (
      state: TasksState,
      { payload }: PayloadAction<string>,
    ) => {
      return state.map((task) => {
        return task.category === payload ? { ...task, category: "" } : task;
      });
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  unbindDeletedCategory,
} = tasksSlice.actions;

export const { reducer: tasksReducer } = tasksSlice;
