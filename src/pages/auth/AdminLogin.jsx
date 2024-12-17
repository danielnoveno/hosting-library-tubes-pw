import React from 'react';
import './userLogin.css';

const AdminLoginPage = () => {
  return (
    <div className="container">
      <div className="row login-container">
        {/* Bagian Kiri - Form Login Admin */}
        <div className="col-md-6 login-form">
          <h2 className="mb-4">Login Admin</h2>
          <p>Hanya admin yang terdaftar yang dapat login.</p>
          <form action="/dashboard">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value="janedoe@digilibrary.com" // Pre-filled with admin email
                placeholder="Masukkan email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <div className="mb-3 d-flex justify-content-between">
                <a href="#">Lupa Password?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
            <div className="text-center">Login Dengan</div>
            <button type="button" className="btn btn-outline-dark w-100 mb-2">
              <i className="bi bi-google"></i> Google
            </button>
            <button type="button" className="btn btn-outline-dark w-100">
              <i className="bi bi-facebook"></i> Facebook
            </button>
          </form>
        </div>

        <div className="col-md-6 login-right d-none d-md-block">
          <div className="image-container">
            <img
              src="https://cdn.pixabay.com/photo/2023/05/07/18/00/library-7976837_1280.jpg"
              alt="Library"
              className="responsive-image"
            />
            <h3 className="overlay-text">DigiLibrary</h3>
            <p className="image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-telegram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
