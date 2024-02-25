import { RootState } from "../../store";
import { CategoriesState } from "./reducer";

export const selectAllCategories = (state: RootState): CategoriesState => state.categories;
