import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    try {
      registerUser(email, password);
      navigate("/login");
    } catch (err) {
      if (err.message === "USER_EXISTS") {
        setError("User already exists. Please login.");
      }
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-card">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>
        <div className="input-group">
            <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="input-group">
            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <button className="btn">Signup</button>

        {error && <p className="error">{error}</p>}
        </form>
    </div>
    </div>
  );
};

export default Signup;