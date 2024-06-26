import React, { useEffect, useState} from "react";
import { SocialIcon } from "react-social-icons";
import { useNavigate } from "react-router-dom";
import "./loginstyle.css"

const Login = () => {

  const [username,setusername]= useState();
  const [email,setemail]= useState();
  const [password,setpassword]= useState();
  const [loginemail,setloginemail]= useState();
  const [loginpassword,setloginpassword]= useState();
  const navigate=useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:5000/loginhotel", {
        method: 'post',
        body: JSON.stringify({email:loginemail,password:loginpassword}),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json();
      alert(result.error || result.message);
      if(result.message)
      {
        localStorage.setItem('email',loginemail);
      }
  }
  catch (error) {
    console.log("ssss");
  }
}

  const signUp = async (e) => {
  e.preventDefault();
   
    try {
      let result = await fetch("http://localhost:5000/registerhotel", {
        method: 'post',
        body: JSON.stringify({username:username,email:email,password:password}),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json();
      console.log(result);
      if(!result.error)
      {
        localStorage.setItem('email', email);
        navigate("/");
      }
    } catch (error) {
      console.log("ssss");
    }
    

    try {
      console.log(email);
      let result = await fetch("http://localhost:5000/createhotelrequest", {
        method: 'post',
        body: JSON.stringify({email:email}),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json();
      console.log(result);

    } catch (error) {
      console.log("ssss");
    }

  }
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
    
        const container = document.querySelector(".container");
    
        sign_up_btn.addEventListener("click", () => {
          container.classList.add("sign-up-mode");
        });
    
        sign_in_btn.addEventListener("click", () => {
          container.classList.remove("sign-up-mode");
        });
      }, []);
    
      return (
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form">
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="E-mail" value={loginemail} onChange={(e) => setloginemail(e.target.value)}/>
                </div>
                <div className="input-field">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" value={loginpassword} onChange={(e) => setloginpassword(e.target.value)}/>
                </div>
                <input type="submit" value="Login" onClick={signIn} className="btn solid" />
                <p className="social-text">Or sign in with social platforms</p>
    
                <div className="social-media">
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className='bx bxl-facebook'></i> */}
                    <SocialIcon url="https://facebook.com" />
                  {/* </a> */}
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-twitter"></i> */}
                    <SocialIcon url="https://twitter.com" />
                  {/* </a> */}
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-google"></i> */}
                    <SocialIcon url="https://google.com" />
                  {/* </a> */}
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-linkedin"></i> */}
                    <SocialIcon url="https://linkedin.com" />
                  {/* </a> */}
                </div>
              </form>
              <form className="sign-up-form">
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)}/>
                </div>
                <div className="input-field">
                  <i className="bx bxs-envelope"></i>
                  <input type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="input-field">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <input type="submit" value="Sign Up"  onClick={signUp} className="btn solid" />
                <p className="social-text">Or sign up with social platforms</p>
    
                <div className="social-media">
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-facebook"></i> */}
                    <SocialIcon url="https://facebook.com" />
                  {/* </a> */}
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-twitter"></i> */}
                    <SocialIcon url="https://twitter.com" />
                  {/* </a> */}
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-google"></i> */}
                    <SocialIcon url="https://google.com" />
                  {/* </a> */}
                  {/* <a href="#" className="social-icon"> */}
                    {/* <i className="bx bxl-linkedin"></i> */}
                    <SocialIcon url="https://linkedin.com" />
                  {/* </a> */}
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here?</h3>
                <p>
                    "Discover the Art of Hospitality - Sign up now to unlock exclusive offers, exceptional services, and create timeless memories in our luxurious hotels. Your perfect escape awaits!"
                </p>
                <button className="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
              <img
                src="/images/Profiling_Monochromatic.png"
                className="image"
                alt=""
              />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us?</h3>
                <p>
                    "Welcome back to a world of extraordinary experiences! Sign in to access your personalized reservations, manage your bookings, and indulge in our impeccable hospitality. We're thrilled to continue making your stays truly unforgettable."
                </p>
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img
                src="/images/Authentication_Outline.png"
                className="image"
                alt=""
              />
            </div>
          </div>
        </div>
      );
}

export default Login