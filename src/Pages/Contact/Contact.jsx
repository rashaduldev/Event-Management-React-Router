const Contact = () => {

      const handlesubmit = (e) => {
    e.preventDefault();
    }
    return (
        <div className="mt-20 mx-10 my-10 rounded-2xl">
        <h2 className="text-3xl lg:text-7xl font-bold text-center my-10">Contact Us</h2>
        <div
          className="hero min-h-screen bg-base-200 rounded-2xl"
          
        >
          <div
            className="rounded-2xl"
           
          ></div>
          <div className="hero-content flex-col lg:flex-row lg:gap-40 justify-between">
            <div className=" lg:text-left text-black">
             <h3 className="text-3xl mb-10">Location</h3>
            <p className="my-10">Address
                Unisco university
                Albany, NY
                USA. 11001</p>
                <p>
                Email
                info@unisco.edu
                admin@unisco.edu
                </p>
                <p>
                phone
                +91 555 668 986
                </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handlesubmit} className="card-body">
                <h2>Leave a message</h2>
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
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Write a message</span>
                  </label>
                  <textarea
                    placeholder="Write ................."
                    style={{ border: "1px solid gray" }}
                    name="text"
                    id=""
                    cols="20"
                    rows="5"
                  ></textarea>
                </div>
                <button className="btn" >
                 Send Message
                </button>
  
    
<button className="btn" onClick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">

        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;