import API from "./api";

export const getJobs = () => API.get("/jobs");

export const createJob = (data) => API.post("/jobs", data);

export const updateJob = (id, data) =>
  API.put(`/jobs/${id}`, data);

export const deleteJob = (id) =>
  API.delete(`/jobs/${id}`);

/* ✅ ADD THIS */
export const applyJob = (id) =>
  API.post(`/jobs/${id}/apply`);
