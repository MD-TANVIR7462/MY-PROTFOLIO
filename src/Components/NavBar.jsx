
import { Link } from 'react-scroll';
import {
   // AiFillStar,
   AiOutlineHome,
   AiOutlineFundProjectionScreen,
   AiOutlineContacts
 } from "react-icons/ai";
 import { GiSkills } from "react-icons/gi"
 import { CgFileDocument } from "react-icons/cg";
 import { SiSlack } from "react-icons/si";

const NavBar = () => {

   const navOptions = <>

      <li className='text-lg '><Link to={'home'}> <AiOutlineHome/>  Home</Link></li>
      <li className='text-lg '><Link to={'About'}> <SiSlack/>About Me</Link></li>
      <li className='text-lg '><Link to={'skills'}><GiSkills/>Skills</Link></li>
      <li className='text-lg'><Link to={'about'}> <AiOutlineFundProjectionScreen/>Projects</Link></li>
      <li  className='text-lg'><Link to={'contact'}><AiOutlineContacts/>Contact</Link></li>
     


   </>
   return (
      <div>
         <div className="navbar fixed md:py-5  z-10 bg-opacity-20 md:px-10">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow rounded-box w-52 text-white  bg-[#1a1330]  ">
                     {navOptions}
                     
                   

                  </ul>
               </div>
               <div className='flex items-center'>
                  <img src={"https://i.ibb.co/f2YbNWG/a8e152ea86a0f346f14a90c42c342c6b.jpg"} className='md:w-20 w-12  flex rounded-full '  alt="" />
                  <span className="text-yellow-400 text-base font-bold md:text-2xl ps-1 hidden md:flex ">Tanvir</span>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 text-white  bg-[#1a1330] bg-opacity-20">
                  {navOptions}
                  
         
                  
               </ul>


            </div>
            
            <div className="navbar-end">
               <span className='px-2'>
               <label className="swap swap-rotate">
  

  
</label>
               </span>
                
                 
            </div>
            
         </div>
      </div>
   );
};

export default NavBar;