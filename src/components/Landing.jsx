import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="landing-hero">
        <h1>University Work-Study System</h1>
        <p>Manage students, jobs, and attendance seamlessly.</p>

        <div className="login-choices">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <h3>Student Management</h3>
            <p>
              Easily manage student applications, approvals, and job
              assignments.
            </p>
          </div>

          <div className="info-card">
            <h3>Job Opportunities</h3>
            <p>
              Post and manage campus work opportunities for eligible students.
            </p>
          </div>

          <div className="info-card">
            <h3>Attendance Tracking</h3>
            <p>
              Monitor work hours and attendance with real-time analytics.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} KL University Work-Study Portal
      </footer>
    </>
  );
}
