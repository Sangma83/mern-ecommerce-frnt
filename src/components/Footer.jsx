
import { FaBehance, FaFacebook, FaSlack } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
       <div>
         <footer className="footer p-12 bg-base-200 text-base-content">
  <aside className='mr-32'>
  
        <img className='w-1/4 lg:w-1/5' src="" alt="" />
        <p className='-mt-5 lg:-mt-8 font-bold'>Fair<span className='text-blue-900 font-extrabold'>Ly</span></p>
    
    <p>FairLy Industries Ltd.<br/>Providing reliable since 2004</p>
    <div className="flex gap-4 text-xl">
    <FaFacebook /><BsInstagram /><FaSlack /><FaBehance />
    </div>
  </aside> 
  <nav className=' mr-20'>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav  className=' mr-20'>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav  className=' mr-20'>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by FairLy Industries Ltd</p>
  </aside>
</footer>
       </div>

    );
};

export default Footer;