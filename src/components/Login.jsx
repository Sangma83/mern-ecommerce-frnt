// import loginPic from "../../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import { FaEye, FaGithub } from "react-icons/fa6";
// import { FaEyeSlash } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Helmet } from "react-helmet-async";
// import { FcGoogle } from "react-icons/fc";


const Login = () => {
    // const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
//     const [loginError, setLoginError] = useState('');
//    const [success, setSuccess] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);

         //reset error
         setLoginError('');
        //  setSuccess('')

         //create user
         signIn(email, password)
         .then(result =>{
             console.log(result.user);
             setSuccess();
            toast("User Log in Successfully!");
 
             //navigate after login
 
             setTimeout(() =>{
              navigate(location?.state ? location.state : '/'); 
            }, 2000)
         })
         .catch(error =>{
             console.error(error);
             // Display error message
             setLoginError();
             toast.error('Invalid email or password. Please try again.');
         })
    }


    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result =>{
        console.log(result.user);
        
      })
      .catch(error => {
        console.error(error)
      })
    }
    const handleGithubSignIn = () =>{
      signInWithGithub()
      .then(result =>{
        console.log(result.user);
        
      })
      .catch(error => {
        console.error(error)
      })
    }

    return (
        
        <div>
          {/* <Helmet>
                <title>Maple Ridge || Login</title>
            </Helmet> */}
            {/* <Navbar></Navbar> */}

    <div className="hero min-h-screen my-16">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold ml-20">Login now!</h1>
     <img className="w-2/3  mt-4 ml-28 lg:ml-0 " src="" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-28">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
            <span className="absolute top-44 right-10" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
            </span>
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
          <button className="btn btn-primary">Login<ToastContainer></ToastContainer></button>
          {
          loginError && <p>{loginError}</p>
          }
          {
        success && <p>{success}</p>
          }
        </div>
        <p>Do not Have an account? <Link className="text-blue-400 font-bold" to='/register'>Register</Link></p>
        {
        success && <p>{success}</p>
        }
        <div className="flex gap-4 items-center ml-20">
        <button onClick={handleGoogleSignIn} className="btn btn-ghost text-3xl"><FcGoogle /></button>
        <button onClick={handleGithubSignIn} className="btn btn-ghost text-3xl"><FaGithub /></button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;