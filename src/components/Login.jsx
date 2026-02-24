import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Please enter your University ID and password.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      login(form.username, form.password);
      navigate("/dashboard");
      setLoading(false);
    }, 700);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* HEADER */}
        <h2>Portal Login</h2>
        <p className="login-subtitle">
          Sign in with your university credentials
        </p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* USERNAME */}
          <div className="form-group">
            <label>University ID</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your ID"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* REMEMBER */}
          <div style={{ marginBottom: "14px", fontSize: "0.85rem" }}>
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                style={{ marginRight: "6px" }}
              />
              Remember me
            </label>
          </div>

          {/* BUTTON */}
          <button className="btn-auth" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* DIVIDER */}
        <div
          style={{
            margin: "18px 0",
            borderTop: "1px solid #e5e7eb",
          }}
        />

        {/* LINKS */}
        <div style={{ fontSize: "0.85rem", textAlign: "center" }}>
          <span>New user?</span>
          <Link to="/register" className="link">
            Create account
          </Link>
        </div>

        <button
          className="btn-home"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>

        {/* FOOTER NOTE */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.75rem",
            color: "#6b7280",
            textAlign: "center",
          }}

        >
          © {new Date().getFullYear()} KL University Work-Study Portal
        </p>
      </div>
    </div>
  );
}
