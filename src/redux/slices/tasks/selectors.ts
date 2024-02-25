import { RootState } from "../../store";
import { TasksState } from "./reducer";

export const selectAllTasks = (state: RootState): TasksState => state.tasks;
