import API from "./api";

export const getApplications = () => API.get("/applications");
export const approveApplication = (id) =>
  API.put(`/applications/${id}/approve`);
export const rejectApplication = (id) =>
  API.put(`/applications/${id}/reject`);
