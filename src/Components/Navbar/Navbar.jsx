import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      
        <div className="logoDiv">
        <Link to="/"><h1 className="logo text-[25px] text-blueColor"><strong>get</strong>Work</h1></Link>  
        </div>
        <div className="menu flex gap-8">
          <Link to="/"><li className="menuList text-[#6f6f6f] hover:text-blueColor">Home</li></Link>
          <Link to="/Jobs"><li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li></Link>
          <Link to="/PostjobBasic"><li className="menuList text-[#6f6f6f] hover:text-blueColor">Post Job</li></Link>
          <Link to="/ViewGigs"><li className="menuList text-[#6f6f6f] hover:text-blueColor">View Gigs</li></Link>
          <Link to="/Profile"><li className="menuList text-[#6f6f6f] hover:text-blueColor">Profile</li></Link>
          <Link to="/Signin"><li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li></Link>
          <Link to="/Signup"><li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li></Link>
        </div>
      
    </div>
  )
}

export default Navbar
