// src/pages/LoginPage.js
import React, { useState } from "react";
import "./Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // ✅ Redirect to dashboard after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">TrajectAI</div>
        <h2 className="auth-title">🔓 Login to Your Account</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="#" className="auth-link">Forgot Password?</Link>
          </div>
          <button type="submit" className="auth-button">🔐 Login</button>
          {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
        </form>
        <div className="auth-footer">
          Don’t have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
