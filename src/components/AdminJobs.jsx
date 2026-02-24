import { useEffect, useState } from "react";
import { getJobs, createJob, updateJob, deleteJob } from "../api/jobs";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ title: "", description: "", hours: "" });
  const [editingId, setEditingId] = useState(null);

  const loadJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase())
  );

  const submit = async e => {
    e.preventDefault();
    if (editingId) await updateJob(editingId, form);
    else await createJob(form);
    setForm({ title: "", description: "", hours: "" });
    setEditingId(null);
    loadJobs();
  };

  return (
    <div>
      <h2>Manage Jobs</h2>

      <input
        className="search-input"
        placeholder="Search jobs..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <form onSubmit={submit} className="info-card">
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Hours"
          value={form.hours}
          onChange={e => setForm({ ...form, hours: e.target.value })}
        />

        <button className="btn-action">
          {editingId ? "Update" : "Create"}
        </button>
      </form>

      <table className="data-table">
        <tbody>
          {filtered.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.hours}</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => {
                    setEditingId(job.id);
                    setForm(job);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn-reject"
                  onClick={() => deleteJob(job.id).then(loadJobs)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
