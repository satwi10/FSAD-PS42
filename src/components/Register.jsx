import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "STUDENT",
  });

  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || form.password.length < 6) {
      setError("Enter valid ID and password (6+ chars)");
      return;
    }

    try {
      await registerUser(form);
      alert("Account created successfully 🎉");
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={submit}>
        <h2>Create Account</h2>
        <p className="login-subtitle">Student / Faculty registration</p>

        <div className="form-group">
          <label>University ID</label>
          <input
            placeholder="Enter ID"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Faculty</option>
          </select>
        </div>

        {error && <div className="error">{error}</div>}

        <button className="btn-auth">Register</button>

        <button
          type="button"
          className="btn-home"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </form>
    </div>
  );
}
