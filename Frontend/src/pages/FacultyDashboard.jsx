import Timetable from "./Timetable";
import SessionLessons from "./SessionLessons";

export default function FacultyDashboard() {
  return (
    <div>
      <h2>Faculty Dashboard</h2>
      <Timetable />
      <SessionLessons />
    </div>
  );
}
