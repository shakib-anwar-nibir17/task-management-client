import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Regisater/Register";
import TaskDashboard from "../Components/TaskDashboard/TaskDashboard";
import TaskZone from "../Components/TaskZone/TaskZone";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <TaskDashboard></TaskDashboard>,
    children: [
      {
        path: "task-zone",
        element: <TaskZone></TaskZone>,
      },
    ],
  },
]);

export default Routes;
