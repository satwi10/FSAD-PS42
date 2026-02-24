import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardStats() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/api/dashboard/stats")
      .then(res => setStats(res.data));
  }, []);

  return (
    <div className="stats-grid">
      <div className="stat-card">Jobs: {stats.jobs}</div>
      <div className="stat-card">Applications: {stats.applications}</div>
      <div className="stat-card">Hired: {stats.hired}</div>
      <div className="stat-card">Pending: {stats.pending}</div>
    </div>
  );
}
