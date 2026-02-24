import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="uni-logo-mark">KU</div>
        <div>
          <div className="uni-name">KL University</div>
          <span className="portal-badge">Work-Study Portal</span>
        </div>
      </div>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: "12px", fontWeight: 600 }}>
              Welcome, {user.username}
            </span>
            <button
              className="btn-nav"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn-nav">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-nav" style={{ marginLeft: "10px" }}>
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
