import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { CategoriesPage, TasksPage } from "./components/pages";
import { ROUTES } from "./constants/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTES.tasks} element={<TasksPage />} />
        <Route path={ROUTES.categories} element={<CategoriesPage />} />
        <Route index element={<TasksPage />} />
      </Routes>
    </div>
  );
}

export default App;
