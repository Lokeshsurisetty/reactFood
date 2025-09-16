import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginCheck.css";
import { loginUser } from "./store";

function LoginCheck() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { isAuthenticated } = useSelector((state) => state.authentication);

  const loginSuccess = (e) => {
    e.preventDefault();
    setPasswordError("");
    setUsernameError("");

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;

    if (!username) {
      usernameRef.current.focus();
      setUsernameError("Please enter username");
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      setPasswordError("Please enter your password");
      return;
    }

    dispatch(loginUser({ username, password }));

    // ✅ after dispatch, check if login worked
    setTimeout(() => {
      if (isAuthenticated) {
        navigate("/home");
      } else {
        setPasswordError("Login failed — invalid credentials");
      }
    }, 10);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={loginSuccess} noValidate>
        <h2 className="login-title">Welcome Back</h2>

        <label className={`field ${usernameError ? "error" : ""}`}>
          <input ref={usernameRef} type="text" className="input" placeholder=" " autoComplete="username"/>
          <span className="label">Username</span>
        </label>
        {usernameError && <div className="error-text">{usernameError}</div>}

        <label className={`field ${passwordError ? "error" : ""}`}>
          <input ref={passwordRef} type="password" className="input" placeholder=" " autoComplete="current-password"/>
          <span className="label">Password</span>
        </label>
        {passwordError && <div className="error-text">{passwordError}</div>}

        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
  );
}

export default LoginCheck;
