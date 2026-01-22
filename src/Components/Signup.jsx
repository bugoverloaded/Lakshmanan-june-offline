import React from "react";
import { div, h1 } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="mb-3">
        <h1>Signup</h1>
      </div>

      <div className="auth-card">
        <h2 className="text-center mb-4">Create your new account</h2>
        <form className="d-flex flex-column gap-3">
          <div>
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" />
          </div>
          
          <div>
            <label className="form-label">Your E-mail</label>
            <input type="email" className="form-control" placeholder="Enter E-mail" />
          </div>
          
          <div>
            <label className="form-label">Create Password</label>
            <input type="password" className="form-control" placeholder="At least 8 characters" />
          </div>
          
          <div>
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Re-enter Your Password" />
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to all Term & privacy policy and Fees.
            </label>
          </div>

          <div className="d-flex justify-content-center mt-2">
            <button className="btn btn-primary w-100" style={{ maxWidth: '200px' }}>
                <Link to="/Login" className="text-white text-decoration-none d-block">SignUp</Link>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-4 text-center">
        <label className="me-2">Have an Account..?</label>
        <Link to="/Login" className="text-decoration-none fw-bold">Sign-in</Link>
      </div>
    </div>
  );
}