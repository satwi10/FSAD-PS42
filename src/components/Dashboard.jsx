import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-content">
      <h1>Dashboard</h1>

      <p><b>Username:</b> {user.username}</p>
      <p><b>Role:</b> {user.role}</p>

      {user.role === "ADMIN" ? (
        <div className="stats-grid">
          <Link to="/admin/jobs" className="stat-card">
            Manage Jobs
          </Link>

          <Link to="/admin/applications" className="stat-card">
            View Applications
          </Link>

          <Link to="/attendance" className="stat-card">
            Attendance Records
          </Link>
        </div>
      ) : (
        <div className="stats-grid">
          <Link to="/student" className="stat-card">
            Browse Jobs
          </Link>

          <Link to="/attendance" className="stat-card">
            My Attendance
          </Link>
        </div>
      )}
    </div>
  );
}
