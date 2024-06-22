import React from "react";

const LoginPage = () => {
  return (
    <>
      <h1>Sign in</h1>
      <input type="text" name="" placeholder="Username" id="" />
      <input type="password" name="" placeholder="Password" id="" />
      <button name="Login">Log in</button>
      <label htmlFor="remember-me">Remember me</label>
      <input type="checkbox" name="" id="remember-me" />
      <a href="#">Forgot Password</a>
    </>
  );
};

export default LoginPage;