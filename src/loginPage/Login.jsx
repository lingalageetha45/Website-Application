import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">

      <form className="login-box" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="hint">
          Demo: admin@gmail.com / 1234
        </p>

      </form>

    </div>
  );
}