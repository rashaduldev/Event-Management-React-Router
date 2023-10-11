import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {
  const {user,logOut}=useContext(AuthContext);
  console.log(user);

  const handleLogout=()=>{
    logOut()
   
    .than(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
    const navLinks=<>

            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/Event"}>Event</NavLink></li>
            <li><NavLink to={"/about"}>About Us</NavLink></li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
            
</>
    return (
        <div>
            <div className="navbar bg-base-100 px-10 flex justify-between mb-6">
  <div className="">
    <div className="dropdown">
    
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    <a className="cursor-pointer text-4xl font-bold normal-case">Educative</a>
  </div>
    <div className='flex gap-10'>
<div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
     {navLinks}
    </ul>
  </div>
  <div className="">
    {
    user?
    <div>
       <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/g9hCq1W/event1.jpg" />
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li onClick={handleLogout}><Link to={'/login'}><a>Logout</a></Link></li>
      </ul>
    </div>
    {/* <button onClick={handleLogout} className='btn btn-primary'><NavLink to={'/login'}>Log Out</NavLink></button> */}
    </div>
   
    :
   <button className='btn btn-primary'><NavLink to={'/login'}>Login</NavLink></button>
        }
    
  </div>
    </div>
            </div>
        </div>
    );
};

export default Navber;