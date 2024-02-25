import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { CategoryModal, TaskModal } from "../modals";
import { CategoryType, TaskType } from "../../types";
import { useAppDispatch } from "../../hooks";
import { addCategory, addTask } from "../../redux";
import { ROUTES } from "../../constants/routes";

import "./Header.css";

export const Header = () => {
  const { pathname } = useLocation();
  const isCategories = pathname.includes(ROUTES.categories);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleCategoryAdd = useCallback((data: CategoryType) => {
    dispatch(addCategory(data));
    setIsCreateModalOpen(false);
  }, [dispatch]);

  const handleTaskAdd = useCallback((data: TaskType) => {
    dispatch(addTask(data));
    setIsCreateModalOpen(false);
  }, [dispatch]);

  return (
    <header className="header">
      <h1 className="header-title">ToDo List</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li
            className={
              !isCategories
                ? "header-list-item header-list-item-active"
                : "header-list-item"
            }
          >
            <Link to={ROUTES.tasks}>Задачи</Link>
          </li>
          <li
            className={
              isCategories
                ? "header-list-item header-list-item-active"
                : "header-list-item"
            }
          >
            <Link to={ROUTES.categories}>Категории</Link>
          </li>
        </ul>
        <button
          className="header-button"
          onClick={() => setIsCreateModalOpen(true)}
        >
          {isCategories ? "Добавить категорию" : "Добавить задачу"}
        </button>
      </nav>
      {isCreateModalOpen && (
        isCategories ? (
        <CategoryModal
          onClose={() => setIsCreateModalOpen(false)}
          onConfirm={handleCategoryAdd}
        />
      ) : (
        <TaskModal
          onClose={() => setIsCreateModalOpen(false)}
          onConfirm={handleTaskAdd}
        />
      ))}
    </header>
  );
};
