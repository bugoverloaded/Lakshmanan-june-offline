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

export default function Login() {
  return (
    <div className="auth-container">
      <motion.div 
        custom={0} initial="hidden" animate="visible" variants={fadeUp}
        className="mb-4 text-center">
        <h1 className="fw-bold font-serif">LogIn</h1>
      </motion.div>
      
      <motion.div 
        custom={1} initial="hidden" animate="visible" variants={fadeUp}
        className="auth-card">
        <center>
          <h3 className="mb-4">Login your Account</h3>
          <form>
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label text-start">Email:</label>
              <div className="col-sm-9">
                <input type="email"className="form-control" placeholder="enter your email" />
              </div>
            </div>
            
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label text-start">Password:</label>
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
      </motion.div>

      <motion.div 
        custom={2} initial="hidden" animate="visible" variants={fadeUp}
        className="mt-4 text-center">
        <h5 className="my-3 text-muted">-------------------- OR -----------------------</h5>
        <div className="mt-3">
            <p className="mb-1">You have no account? Create a new account</p>
            <Link to="/Signup" className="text-decoration-none fw-bold fs-5">Signup</Link>
        </div>
      </motion.div>
    </div>
  );
}
