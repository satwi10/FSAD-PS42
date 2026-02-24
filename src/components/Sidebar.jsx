import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Work-Study</h3>

      {/* 🏠 Home */}
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      {/* 📊 Dashboard */}
      <NavLink to="/dashboard" className={linkClass}>
        Dashboard
      </NavLink>

      {/* 🎓 Student Links */}
      <NavLink to="/student" className={linkClass}>
        Jobs
      </NavLink>

      <NavLink to="/attendance" className={linkClass}>
        Attendance
      </NavLink>

      {/* 🛠 Admin Links */}
      {user?.role === "ADMIN" && (
        <>
          <NavLink to="/admin/jobs" className={linkClass}>
            Manage Jobs
          </NavLink>

          <NavLink to="/admin/applications" className={linkClass}>
            Applications
          </NavLink>
        </>
      )}

      {/* 🚪 Logout */}
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
