import { useEffect, useState } from "react";
import { getSessions, addSession, deleteSession } from "../api/facultyApi";

export default function SessionLessons() {
  const [sessions, setSessions] = useState([]);
  const [topic, setTopic] = useState("");

  const load = async () => {
    const res = await getSessions();
    setSessions(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async () => {
    await addSession({ topic });
    setTopic("");
    load();
  };

  return (
    <div>
      <h3>Session Lessons</h3>
      <input value={topic} onChange={(e) => setTopic(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {sessions.map((s) => (
        <div key={s.id}>
          {s.topic}
          <button onClick={() => deleteSession(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
