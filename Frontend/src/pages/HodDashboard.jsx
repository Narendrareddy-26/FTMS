import { useEffect, useState } from "react";
import { getAllFaculty, getFacultySessions } from "../api/hodApi";

export default function HodDashboard() {
  const [faculty, setFaculty] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getAllFaculty().then((res) => setFaculty(res.data));
  }, []);

  const viewSessions = async (id) => {
    const res = await getFacultySessions(id);
    setSessions(res.data);
  };

  return (
    <div>
      <h2>HOD Dashboard</h2>

      <h3>Faculty List</h3>
      {faculty.map((f) => (
        <div key={f.id}>
          {f.username}
          <button onClick={() => viewSessions(f.id)}>View Sessions</button>
        </div>
      ))}

      <h3>Sessions</h3>
      {sessions.map((s) => (
        <div key={s.id}>{s.topic}</div>
      ))}
    </div>
  );
}
