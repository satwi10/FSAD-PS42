import { useEffect, useState } from "react";
import API from "../api/api";

export default function Attendance() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    API.get("/attendance").then(res => setRecords(res.data));
  }, []);

  return (
    <div>
      <h2>Attendance</h2>

      <table className="data-table">
        <tbody>
          {records.map(r => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.hours}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
