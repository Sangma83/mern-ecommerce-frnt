import { Link, NavLink } from 'react-router-dom';
import defaultPic from '../assets/default.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';



import { useEffect } from "react";


const Navbar = () => {

// use theme from local storage if available or set light theme
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);

// update state on toggle
const handleToggle = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

// set theme state in localstorage on mount & also update localstorage on state change
useEffect(() => {
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme");
  // add custom data-theme attribute to html tag required to update theme using DaisyUI
  document.querySelector("html").setAttribute("data-theme", localTheme);
}, [theme]);






    const { user, logOut } = useContext(AuthContext);
    const [isRegistered, setIsRegistered] = useState(false);
   
   
    const handleRegister = () => {
     
      setIsRegistered(true);
    };

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
      }

    const navLinks = <>
      
      {/* <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li> */}
       {
        user && <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
        </>
      }
     
      
    
    </>

    return (
        <div className="navbar bg-base-100 shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <div className='mb-4' >
       <h2 className='text-4xl'>Fair<span className='text-blue-900 font-extrabold'>Ly</span></h2>
        
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
  
  {
  user ? (

    isRegistered ? (
      // If user is not logged in but registered, show login button
      <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
    ):
    <>
      <div className="tooltip" data-tip={user.displayName}>
        <button className=""><img alt="User profile" className="w-10 rounded-full" src={user?.photoURL || defaultPic} /></button>
      </div>
      <button onClick={handleSignOut} className="btn btn-ghost">Log Out</button>
    </>
  ) :
  
  (
    <>
      
      <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
    </>
  )
  
}
<Link to='/register'><button onClick={handleRegister} className="btn btn-ghost">Register</button></Link>

<label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" 
   onChange={handleToggle}
   // show toggle image based on localstorage theme
   checked={theme === "light" ? false : true}
  className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

  </div>
</div>
    );
};

export default Navbar;








































// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navLinks = (
//     <>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/product">Product</NavLink></li>
//       <li><NavLink to="/login">Login</NavLink></li>
//       <li><NavLink to="/register">Register</NavLink></li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {navLinks}
//           </ul>
//         </div>
//         <a className="normal-case text-2xl font-bold">Fair<span className="text-blue-900 font-extrabold">Ly</span></a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {navLinks}
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Button</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
