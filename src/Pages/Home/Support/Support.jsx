import React, { useState } from "react";

const Support = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-20 mx-10 my-10 rounded-2xl" data-aos="zoom-out-down">
      <h2 className="text-7xl font-bold text-center my-10">Support</h2>
      <div
        className="hero min-h-screen bg-base-200 rounded-2xl"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Cv85Yjr/Dream-Shaper-v7-Create-an-image-that-showcases-a-welcoming-and-2.jpg')",
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center", // Adjust as needed
          position: "relative", // Required for the overlay
        }}
      >
        <div
          className="rounded-2xl"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (last value) as needed
            // zIndex: 1, // Ensure the overlay appears above the background image
          }}
        ></div>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-6xl font-bold">Support and Help Center</h1>
            <p className="py-20 text-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              {/* Your form content */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write your opinion</span>
                </label>
                <textarea
                  placeholder="Write at least 10 words"
                  style={{ border: "1px solid gray" }}
                  name="text"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="btn" onClick={openModal}>
                SEND
              </button>

              {isModalOpen && (
                <div className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <button className="btn" onClick={closeModal}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
