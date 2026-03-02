import { useState, useContext } from "react";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    login(res.data.token, res.data.role);

    if (res.data.role === "HOD") navigate("/hod");
    else navigate("/faculty");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <button>Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}
