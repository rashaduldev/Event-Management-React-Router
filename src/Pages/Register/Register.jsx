
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
 


  const [alemail, setAlEmail] = useState("");
  const [alpassword, setAlPassword] = useState("");
  const [alerror, setAlError] = useState("");


  const [showPassword, setShowPassword] = useState(false);

  console.log(alemail);

  const {signup}=useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();

    const accepted = e.target.myCheckbox.checked;
 
    if (alpassword.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    } else if (!/^.*?[A-Z].*?$/.test(alpassword)) {
      toast.error('Password must contain at least 1 uppercase letter');
      return;
    }
     else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(alpassword)) {
      toast.error('Password must contain at least 1 special character');
      return;
    } else if (!accepted) {
      toast.error('You must accept the terms and conditions');
      return;
    }
    else{
      setAlError("");
      if (alemail) {
        signup(alemail,alpassword)
        .then(result=>{
          toast.success('Registration Successful');
        console.log(result.user);
         })
        .catch(error=>{
          toast.error('This Email Alreay in Register.Please go to Login page');
          console.log(error);
        })
      }
    }
  }
  
  return (
    <div
      className='min-h-screen flex items-center justify-center relative'
      style={{
        backgroundImage: "url('https://i.ibb.co/Cvhzv2g/login.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className='absolute inset-0 bg-black opacity-40'
      ></div>

      <div
        className='max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-lg relative'
        style={{
          zIndex: 1,
        }}
      >
        <h2 className='text-3xl font-bold text-center'>Registration Here</h2>
        <form onSubmit={handleRegistration}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
          </div>
           <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input onChange={(e)=>setAlEmail(e.target.value)} type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <div className="w-full">
                <input onChange={(e)=>setAlPassword(e.target.value)} type={!showPassword ? "password" : "text"} name='password' placeholder="Password" className="input input-bordered w-full" required />
              </div>
              <span className="cursor-pointer absolute top-4 text-lg right-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
          </div>
          <div className='flex gap-3 my-3'>
            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox">Accept Our Terms and Condition </label>
          </div>
          
          <div className="form-control mt-6">
           <button type="submit" className="btn btn-accent text-white">Registration</button>
          </div>
         
        </form>
        <div className="text-green-600"></div>
        <div className='text-center'>
          Already have an Account? <NavLink to={'/login'} className="text-blue-500">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
