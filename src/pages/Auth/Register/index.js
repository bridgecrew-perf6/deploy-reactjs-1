import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container mt-30 flex">
      <div>Register</div>
      <Link to="/auth/login">Login</Link>
    </div>
  );
}
