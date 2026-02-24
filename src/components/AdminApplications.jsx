import { useEffect, useState } from "react";
import {
  getApplications,
  approveApplication,
  rejectApplication,
} from "../api/applications";

export default function AdminApplications() {
  const [apps, setApps] = useState([]);

  const load = async () => {
    const res = await getApplications();
    setApps(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Applications</h2>

      <table className="data-table">
        <tbody>
          {apps.map(app => (
            <tr key={app.id}>
              <td>{app.studentName}</td>
              <td>{app.jobTitle}</td>
              <td>{app.status}</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => approveApplication(app.id).then(load)}
                >
                  Approve
                </button>
                <button
                  className="btn-reject"
                  onClick={() => rejectApplication(app.id).then(load)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
