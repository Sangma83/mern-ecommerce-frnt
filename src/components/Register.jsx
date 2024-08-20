import { Link, useLocation, useNavigate } from "react-router-dom";
import registerPic from '../assets/register.png';
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";


const Register = () => {
   const { createUser } = useContext(AuthContext);
   const [registerError, setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();


    const handleRegister =  e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

          //reset error
          setRegisterError('');
          // setSuccess('')

        if(password.length < 6){
          setRegisterError();
          toast.error("Password should be at least 6 characters or longer!");
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError();
          toast.error("Password should be at least one Uppercase characters!");
          return;
        }
        else if(!/[a-z]/.test(password)){
          setRegisterError();
          toast.error("Password should be at least one Lowarcase characters!");
          return;
        }


        //create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess();
            toast("Registration Successful!");
            
            //navigate after register
      setTimeout(() =>{
        navigate(location?.state ? location.state : '/login'); 
      }, 2000)
            
        })
        .catch(error =>{
            console.error(error);
            setRegisterError();
            toast("Email is already in use!");
        })
    }

    return (
        
        <div>

             <Helmet>
                <title>FairLy || Register</title>
            </Helmet>
           <Navbar></Navbar>

    <div className="hero min-h-screen my-16">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold ml-40">Register here!</h1>
     <img className="w-2/3  mt-4 ml-28 lg:ml-12" src={registerPic} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-28">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
            <div className="relative">
            <span className="absolute top-8 right-2" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
            </span>
            </div>
          </label>
          
          <input 
          type={showPassword ? "text" : "password" }
          placeholder="password" 
          name="password" 
          className="input input-bordered" required />
         
          
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <br />
          <div className="mb-2 items-center">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms & Conditions</a></label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register <ToastContainer></ToastContainer></button>
        </div>
        <p>Already Have an account? <Link className="text-blue-400 font-bold" to='/login'>Login</Link></p>
      </form>
      {
        registerError && <p>{registerError}</p>
      }
      {
        success && <p>{success}</p>
      }
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Register;