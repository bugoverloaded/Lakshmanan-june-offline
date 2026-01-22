import { h1 } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="auth-container">
      <div className="mb-4">
        <h1>LogIn</h1>
      </div>
      
      <div className="auth-card">
        <center>
          <h3 className="mb-4">Login your Account</h3>
          <form>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Email:</label>
              <div className="col-sm-9">
                <input type="email"className="form-control" placeholder="enter your email" />
              </div>
            </div>
            
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Password:</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" placeholder="enter your password" />
              </div>
            </div>
            
            <div className="mt-4 d-flex justify-content-center">
               <button className="btn btn-primary w-100" style={{ maxWidth: '200px' }}>
                  <Link to="/" className="text-white text-decoration-none d-block">Login</Link>
               </button>
            </div>
          </form>
        </center>
      </div>

      <div className="mt-4 text-center">
        <h5 className="my-3">-------------------- OR -----------------------</h5>
        <div className="mt-3">
            <p className="mb-1">You have no account? Create a new account</p>
            <Link to="/Signup" className="text-decoration-none fw-bold fs-5">Signup</Link>
        </div>
      </div>
    </div>
  );
}
