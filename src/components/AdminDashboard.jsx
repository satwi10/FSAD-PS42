import { useEffect, useState } from "react";
import axios from "axios";
import DashboardStats from "./DashboardStats";

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch all applications
  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/applications");
      setApps(res.data);
    } catch (err) {
      console.error("Error fetching applications", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // 🔹 Update status (NO PAGE RELOAD)
  const updateStatus = async (id, status) => {
    try {
      setLoading(true);

      await axios.put(
        `http://localhost:8080/api/applications/${id}/status`,
        status,
        { headers: { "Content-Type": "text/plain" } }
      );

      // refresh list
      await fetchApplications();
      setLoading(false);
    } catch (err) {
      console.error("Error updating status", err);
      setLoading(false);
    }
  };

  return (
    <div>
      <DashboardStats />

      <h3 style={{ marginTop: "25px" }}>Application Management</h3>

      <table className="data-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Job ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {apps.map((app) => (
            <tr key={app.id}>
              <td>{app.studentName}</td>
              <td>{app.jobId}</td>

              {/* STATUS BADGE */}
              <td>
                <span
                  className={
                    app.status === "HIRED"
                      ? "badge success"
                      : app.status === "REJECTED"
                      ? "badge danger"
                      : "badge warning"
                  }
                >
                  {app.status}
                </span>
              </td>

              <td>
                {app.status === "PENDING" ? (
                  <>
                    <button
                      type="button"
                      className="btn-accept"
                      disabled={loading}
                      onClick={() => updateStatus(app.id, "HIRED")}
                    >
                      Accept
                    </button>

                    <button
                      type="button"
                      className="btn-reject"
                      disabled={loading}
                      onClick={() => updateStatus(app.id, "REJECTED")}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span style={{ color: "#6b7280" }}>Completed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
