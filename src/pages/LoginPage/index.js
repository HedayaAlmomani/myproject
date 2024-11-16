import React, { useState } from "react";
import Input from "../../CoreComponent/Input";
import "./style.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    // Perform login logic here
    console.log("Logging in with", { username, password });
    setErrorMsg("");
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          label="Username"
          placeholder="Enter your username"
          type="text"
          inputValue={username}
          setInputValue={setUsername}
          errorMsg={!username && errorMsg ? "Username is required" : ""}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          inputValue={password}
          setInputValue={setPassword}
          errorMsg={!password && errorMsg ? "Password is required" : ""}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
