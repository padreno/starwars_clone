import React, { useState } from "react";
import logo from "../assets/img_2/logo.png";
import { useHistory } from "react-router-dom";
import "./LogIn.css";
//import Members from "./Members";
const LogIn = ({
  setAuth,
  setShowLogIn,
  setShowLogOut,
  setShowUpandIn,
  setShowIntro,
}) => {
  const [email, setEmail] = useState("");
  const [passWordValue, setPassWordValue] = useState("");
  const [showErrorEmail, setShowErrorEmail] = useState("");
  const [showErrorPassWord] = useState("");
  const history = useHistory();
  const handleLogin = (data) => {
    data.preventDefault();
    //check if the email is valid
    const checkEmail = () => {
      let valid = false;
      const emailL = email.trim();
      if (!isRequired(emailL)) {
        setShowErrorEmail("Email cannot be blank.");
      } else if (!isEmailValid(email)) {
        setShowErrorEmail("Email is not valid.");
      } else {
        setShowErrorEmail(email);
        valid = true;
      }
      return valid;
    };
    const isEmailValid = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const isRequired = (value) => (value === "" ? false : true);
    const isThisEmailValid = checkEmail();
    // if email is valid we check if email and pssword match we it s storaged in local storage
    if (isThisEmailValid) {
      const dataX = JSON.parse(localStorage.getItem("signups"));
      const getArray = dataX.filter(
        (ele) => ele["pass-word"] === passWordValue && ele["e-mail"] === email
      );
      // if password and email match we will get one object in our array the we unlock the auth and the logging dissapear
      if (isThisEmailValid && getArray.length === 1) {
        console.log("success");
        setAuth(true);
        setShowLogIn(false);
        setShowLogOut(true);
        setShowUpandIn(false);
        setShowIntro(false);
        history.push("/members");
      }
    }
  };

  return (
    <div className="signIn_container">
      <form onSubmit={handleLogin} className="login_form">
        <img
          style={{
            width: " 110px",
            height: "90px",
            padding: "10px",
            clor: "#edd700",
          }}
          src={logo}
          alt=""
        />
        <div className="signIn_card">
          <h1>SIGN IN</h1>

          <div>
            <input
              label="Email"
              name="email"
              value={email}
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
            <label>{showErrorEmail}</label>
          </div>
          <div>
            <input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassWordValue(e.target.value)}
              className="form-control"
              required
            />
            <div>{showErrorPassWord}</div>
          </div>

          <button>Sign in</button>
        </div>
        <p>Create an Account</p>
      </form>
    </div>
  );
};
export default LogIn;

//&&
//email in localStorage &&
//passWordValue in localStorage
