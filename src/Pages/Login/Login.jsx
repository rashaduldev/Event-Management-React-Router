/* eslint-disable no-unused-vars */
// import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";  
import { //getAuth,
  GoogleAuthProvider,
         //createUserWithEmailAndPassword,
         sendPasswordResetEmail,
         signInWithEmailAndPassword, 
         signInWithPopup
    } from 'firebase/auth';

import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, auth } from "../../Provider/AuthProvider";
// eslint-disable-next-line no-unused-vars
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [registerError, setRegisterError] = useState('');
  const [mgssuccess, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRef=useRef(null);
  const [value,setValue]=useState('');

  const [alemail, setAlEmail] = useState("");
  const [alpassword, setAlPassword] = useState("");
  const [alerror, setAlError] = useState("");



  const {user,signIn,createUser,signup}=useContext(AuthContext);
  
  const location=useLocation();
  const navigate=useNavigate();
  console.log('login', location);

  const googleProvider=new GoogleAuthProvider();

  
  console.log(user);
  console.log(signIn);
  console.log(createUser);
  console.log(signup);

  const handleLogin = (e) => {
    e.preventDefault();


    if (alemail,alpassword) {
      signIn(alemail,alpassword)
      .then(result => {
        toast.success('Login Successful');
        setSuccess(result);
        navigate(location?.state ? location.state: '/')
      })
       .catch(error => {
        toast.error(error.message);
        console.log(error.message);
      });
      console.log("good");
    }
    const accepted= e.target.myCheckbox.checked;
    setRegisterError('');

     if(!accepted){
      toast.error('You must accept the terms and conditions');
      return;
    }
  };

  const forgetPassword = () => {
    const email = emailRef.current.value;
  
    if (!email) {
      toast.error('Please Enter the email address');
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      toast.error('Please Validate the email address');
      return;
    }
  
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent. Please check your email.');
      })
      .catch((error) => {
        toast.error('Something went wrong');
      });
  };
  

  const googleSignin=()=>{
    signInWithPopup(auth,googleProvider)
    .then(res=>{
      setValue(res);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }
  
  
  return (
    <div
      className='min-h-screen flex items-center justify-center relative mx-10 rounded'
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
        <h2 className='text-3xl font-bold text-center'>Login Here</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input onChange={(e)=>setAlEmail(e.target.value)}
            type="email" 
            name='email' 
            ref={emailRef}
            placeholder="Email" 
            className="input input-bordered w-full" 
            required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <div className="w-full">
                <input  onChange={(e)=>setAlPassword(e.target.value)}
                type={!showPassword ? "password" : "text"} name='password' placeholder="Password" className="input input-bordered w-full" required />
              </div>
              <span className="cursor-pointer absolute top-4 text-lg right-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <div>
            <a onClick={forgetPassword} className="my-2 text-blue-500" href="#">Forget Password ?</a>
            </div>
          </div>
          <div className='flex gap-3 my-3'>
            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox">Accept Our Terms and Condition </label>
          </div>
          <button onClick={handleLogin}  type="submit" className="btn btn-accent text-white w-full">Login</button>
        </form>
        <div className="text-red-600">{registerError}</div>
        <div className="text-green-600">{mgssuccess}</div>
        <div className='text-center'>
          Do not have an Account? <NavLink to={'/register'} className="text-blue-500">Register</NavLink>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <h2>Login With </h2>
          <h2 className='text-2xl'>
        {
          value?.user ? 
          <Navigate to={'/'}><a onClick={googleSignin} className="text-blue-500" href="">Google</a></Navigate>
        
          :
          <Link to={'/login'}><a onClick={googleSignin} className="text-blue-500" href="">Google</a></Link>
         
        }

          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;




