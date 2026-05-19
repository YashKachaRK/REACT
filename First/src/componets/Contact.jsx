// import React from "react";

export default function Contact() {
  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Contact Us</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>

            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}