import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Signup() {
  return (
    <div className="auth-container">
      <motion.div 
        custom={0} initial="hidden" animate="visible" variants={fadeUp}
        className="mb-3 text-center">
        <h1 className="fw-bold font-serif">Signup</h1>
      </motion.div>

      <motion.div 
        custom={1} initial="hidden" animate="visible" variants={fadeUp}
        className="auth-card">
        <h2 className="text-center mb-4">Create your new account</h2>
        <form className="d-flex flex-column gap-3">
          <div>
            <label className="form-label text-start d-block">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" />
          </div>
          
          <div>
            <label className="form-label text-start d-block">Your E-mail</label>
            <input type="email" className="form-control" placeholder="Enter E-mail" />
          </div>
          
          <div>
            <label className="form-label text-start d-block">Create Password</label>
            <input type="password" className="form-control" placeholder="At least 8 characters" />
          </div>
          
          <div>
            <label className="form-label text-start d-block">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Re-enter Your Password" />
          </div>

          <div className="form-check text-start">
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
      </motion.div>

      <motion.div 
        custom={2} initial="hidden" animate="visible" variants={fadeUp}
        className="mt-4 text-center">
        <label className="me-2">Have an Account..?</label>
        <Link to="/Login" className="text-decoration-none fw-bold fs-5">Sign-in</Link>
      </motion.div>
    </div>
  );
}