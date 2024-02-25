import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { CategoryType } from "../../../types";

export type CategoriesState = CategoryType[];

const initialState: CategoriesState = [
  {
    id: "d485a644-5a24-4f55-b3f7-a083338be879",
    name: "Категория",
    description: "Описание может быть длинным",
  },
  {
    id: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
    name: "Категория2",
    description: "Описание может быть длинным",
  },
  {
    id: "36704c57-4575-4112-b962-948b04a20506",
    name: "Категория3",
    description: "Описание может быть длинным",
  },
];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (
      state: CategoriesState,
      { payload }: PayloadAction<Omit<CategoryType, "id">>,
    ) => {
      state.push({
        ...payload,
        id: uuidv4(),
      });
    },
    updateCategory: (
      state: CategoriesState,
      { payload: updatedItem }: PayloadAction<CategoryType>,
    ) => {
      const idx = state.findIndex(({ id }) => id === updatedItem.id);

      idx !== -1 && state.splice(idx, 1, updatedItem);
    },
    deleteCategory: (
      state: CategoriesState,
      { payload }: PayloadAction<string>,
    ) => {
      const idx = state.findIndex(({ id }) => id === payload);

      idx !== -1 && state.splice(idx, 1);
    },
  },
});

export const { addCategory, updateCategory, deleteCategory } =
  categoriesSlice.actions;

export const { reducer: categoriesReducer } = categoriesSlice;
