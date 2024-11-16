import React, { useState } from "react";
import "./style.scss";
import Input from "../../CoreComponent/Input";


const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    // Perform registration logic here
    console.log("Registering user", { username, email, password });
    setErrorMsg("");
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <Input
          label="Username"
          placeholder="Enter your username"
          type="text"
          inputValue={username}
          setInputValue={setUsername}
          errorMsg={!username && errorMsg ? "Username is required" : ""}
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          inputValue={email}
          setInputValue={setEmail}
          errorMsg={!email && errorMsg ? "Email is required" : ""}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          inputValue={password}
          setInputValue={setPassword}
          errorMsg={!password && errorMsg ? "Password is required" : ""}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          inputValue={confirmPassword}
          setInputValue={setConfirmPassword}
          errorMsg={
            !confirmPassword && errorMsg
              ? "Confirm Password is required"
              : password !== confirmPassword
              ? "Passwords do not match"
              : ""
          }
        />
        {errorMsg && <div className="form-error">{errorMsg}</div>}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
