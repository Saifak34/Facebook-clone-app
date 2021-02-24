import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <div className="title">
          Facebook helps you connect and share
          <br></br>with the people in your life
        </div>
      </div>
      <div className="LoginContainer">
        <div className="logindetail">
          <input type="email" placeholder="Email address or Phone number" />
          <br></br>
          <input type="password" placeholder="Password" />
        </div>
        <div className="btn">
          <Link to="/HeaderArea">Log In</Link>
        </div>
        <div className="forget">
          <a href="forget">Forget account</a>
          <br></br>
        </div>
        <div className="create">
          <br></br>
          <button className="btns">Create New Account</button>
        </div>
        <p></p>
        <br></br>
        <div className="page">
          <a href="createpage">Create a page </a>
          for a celeb , brand or business
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
