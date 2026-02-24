import { useEffect, useState } from "react";
import { getJobs, applyJob } from "../api/jobs";

export default function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-content">
      <h2>Available Campus Jobs</h2>

      <input
        className="search-input"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="job-grid">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>
              <strong>Hours:</strong> {job.hours}
            </p>
            <button
              className="btn-action"
              onClick={() => applyJob(job.id)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
