import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setShowSignup(false);

    try {
      const user = loginUser(email, password);

      login(user);
      localStorage.setItem("currentUser", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
      setShowSignup(true);
    }
  };

  return (
   <div className="auth-container">
    <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
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

        <button className="btn">Login</button>

        {error && <p className="error">{error}</p>}

        {showSignup && (
            <div className="signup-hint">
            <p>Don't have an account?</p>
            <a href="/signup">Create one here</a>
            </div>
        )}
        </form>
    </div>
  </div>
  );
};

export default Login;