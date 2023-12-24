import { Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const TaskDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex">
      <div className="text-white pt-20 w-32 min-h-screen bg-black">
        <h1>{user?.displayName}</h1>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default TaskDashboard;
