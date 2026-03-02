import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FacultyDashboard from "./pages/FacultyDashboard";
import HodDashboard from "./pages/HodDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/faculty"
          element={
            <PrivateRoute role="FACULTY">
              <FacultyDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/hod"
          element={
            <PrivateRoute role="HOD">
              <HodDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
