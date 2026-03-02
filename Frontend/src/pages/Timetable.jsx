import { useEffect, useState } from "react";
import { getTimetable } from "../api/facultyApi";

export default function Timetable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTimetable().then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h3>Timetable</h3>
      {data.map((item) => (
        <div key={item.id}>
          {item.day} | {item.startTime} - {item.endTime} | {item.subject}
        </div>
      ))}
    </div>
  );
}
