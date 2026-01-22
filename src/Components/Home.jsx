import React from "react";
import { Link } from "react-router-dom";
import icon from '../assets/img66.png';
import imgb1 from '../assets/imgb1.jpg';
import imgh1 from '../assets/imgh1.jpg';
import imgh2 from '../assets/imgh2.jpg';
import imgh3 from '../assets/imgh3.jpg';
import imgh5a from '../assets/imgh5a.jpg';
import imgh6 from '../assets/imgh6.jpeg';
import imgh7 from '../assets/imgh7.jpg';
import sam1 from '../assets/sam1.jpg';
import sam1A from '../assets/sam1A.png';



export default function Home() {
  return (
    <div className="home-wrapper overflow-x-hidden">


      <header className="home-navbar d-flex align-items-center justify-content-between px-4 py-3 sticky-top">
        <div className="d-flex align-items-center">
          <div className="text-center">
            <h1 className="h3 mb-0" style={{ fontFamily: 'Times New Roman' }}>Welcome to Fashion-Hub</h1>
            <p className="small mb-0">Your one-stop e-commerce destination</p>
          </div>
        </div>

        <nav className="d-none d-md-flex align-items-center gap-4">
          <Link to="/" className="text-dark text-decoration-none fw-semibold">Home</Link>
          <Link to="/AboutUs" className="text-dark text-decoration-none fw-semibold">AboutUs</Link>
          <Link to="/login" className="text-dark text-decoration-none fw-semibold">Login</Link>
          <Link to="/signup" className="text-dark text-decoration-none fw-semibold">Signup</Link>
        </nav>


        <div className="d-flex align-items-center gap-2">
          <img className="icon-img" src={icon} alt="icon" style={{ width: '40px', height: '40px' }} />
        </div>
      </header>



      <section className="hero-section position-relative text-center">
        <img src={imgb1} alt="Hero" className="w-100 d-block" style={{ height: 'auto', minHeight: '400px', objectFit: 'cover' }} />
        <div className="position-absolute top-50 start-50 translate-middle w-100 p-3" style={{ maxWidth: '800px', zIndex: 1 }}>
          <div className="p-4 p-md-5" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '20px', backdropFilter: 'blur(5px)' }}>
            <h1 className="display-4 fw-bold mb-3 font-serif">Shop Smarter <br /> Live Better</h1>
            <h4 className="mb-4">Effortlessly blend comfort & style!</h4>
            <button className="btn btn-warning px-4 py-2 rounded-pill text-white fw-bold">Shop Now</button>
          </div>
        </div>
      </section>



      <section className="container my-5 text-center">
      </section>



      <section className="popular-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center display-4 mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Most Popular</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm product-card">
                <img src={imgh2} className="card-img-top p-3 rounded" alt="Work & Office" />
                <div className="card-body text-center">
                  <h5 className="card-title">Work & Office</h5>
                  <p className="card-text text-muted">Timeless Classic Collection</p>
                  <h6 className="fw-bold">$129.00</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm product-card">
                <img src={imgh3} className="card-img-top p-3 rounded" alt="Casual" />
                <div className="card-body text-center">
                  <h5 className="card-title">Casual</h5>
                  <p className="card-text text-muted">Bohemian Rhapsody Attire</p>
                  <h6 className="fw-bold">$145.50</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm product-card">
                <img src={imgh5a} className="card-img-top p-3 rounded" alt="Party Wear" />
                <div className="card-body text-center">
                  <h5 className="card-title">Party Wear</h5>
                  <p className="card-text text-muted">Midnight Gala Maxi Dress</p>
                  <h6 className="fw-bold">$250.00</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm product-card">
                <img src={imgh1} className="card-img-top p-3 rounded" alt="Casual" />
                <div className="card-body text-center">
                  <h5 className="card-title">Casual</h5>
                  <p className="card-text text-muted">Power Suit Ensemble</p>
                  <h6 className="fw-bold">$125.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="collection-section position-relative my-5" style={{ minHeight: '80vh' }}>
        <div className="container-fluid p-0 position-relative h-100">
          <div className="row g-0 align-items-center">
            <div className="col-lg-7 position-relative">
              <img src={imgh6} alt="" className="w-100 object-fit-cover" style={{ minHeight: '600px' }} />
            </div>
            <div className="col-lg-5 p-5 bg-white shadow-lg" style={{ zIndex: 1, marginTop: '-100px', marginLeft: '-50px', maxWidth: '500px' }}>

              <div className="position-relative mb-4">
                <img src={imgh7} alt="" className="img-fluid rounded shadow" />
              </div>

              <h3 className="mb-4" style={{ fontFamily: 'serif' }}>Explore our exquisite Bag Collection now!</h3>
              <button className="btn btn-warning rounded-pill text-white px-4 py-2">Shop Now</button>
            </div>
          </div>
        </div>
      </section>



      <section className="testimonial-section position-relative text-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#777' }}>
        <img src={sam1} alt="" className="position-absolute w-100 h-100 object-fit-cover" style={{ opacity: 0.5 }} />
        <div className="container position-relative z-1 text-center">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 mb-4 mb-md-0 position-relative">
              <div className="position-relative d-inline-block">
                <img src={sam1A} alt="Samantha" className="img-fluid rounded-circle shadow-lg hover-scale" style={{ maxSize: '300px' }} />
                <div className="position-absolute top-50 start-0 translate-middle-y text-start ps-5" style={{ pointerEvents: 'none' }}>
                  <h3 className="fw-bold text-white mb-0" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)', fontFamily: 'Playfair Display, serif' }}>Style & <br /> Elegance</h3>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-start">
              <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>Samantha's Favourite Shop</h2>
              <p className="lead fst-italic">"Fashion-Hub is my fashion sanctuary! The curated collection effortlessly blends chic trends with timeless elegance, making every purchase a delightful discovery. The quality of their pieces is unmatched, and I appreciate the brand's commitment to sustainable fashion. What truly sets FemmeWardrobe apart is their customer-centric approach"</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2025 Fashion-Hub. All rights reserved.</p>
      </footer>

    </div>
  );
}
