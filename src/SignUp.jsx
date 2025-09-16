import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./SignUp.css";
import { registerUser } from "./store";

function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (data) => {
    dispatch(registerUser(data));   // ✅ save user to redux store
    alert("Signup Successful!");
    navigate("/login");  // redirect to login
  };

  return (
    <div className="signup-container">
      <h2 className="title">Create Account</h2>
      <form onSubmit={handleSubmit(handleSignup)} className="signup-form">
        <input type="text" placeholder="Enter Username" {...register("username", { required: "Username is required" })}/>
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input type="email" placeholder="Enter Email" {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        })}/>
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters" },
        })}/>
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) => value === password || "Passwords do not match",
        })}/>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

        <button type="submit" className="btn-submit">Sign Up</button>
      </form>

      <p className="signin-text">
        Already have an account? <Link to="/" className="signin-link">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
