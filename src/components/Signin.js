import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./generalStyle.css";
import HotelEmployeeService from "../services/HotelEmployeeService";
function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const onSubmit = (data) => {
    HotelEmployeeService.validatePassword(data).then((res) => {
      setPasswordValidationMessage(res.data);
      if (res.data == "") {
        navigate("/login");
      }
    });
  };
  let navigate = useNavigate();

  return (
    <div className="block">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Name-container">
          <label>name:</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "enter your name" })}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <p>{errors?.name && errors.name.message}</p>
        <div className="Password-container">
          <label>password:</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: "enter the password" })}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <p>
          {errors?.password && errors.password.message}
          {passwordValidationMessage}
        </p>
        <div className="Submit-container">
          <input type="submit" value="submit"></input>
        </div>
      </form>
      <a onClick={() => navigate("/signup")}>Sign-Up?</a>
    </div>
  );
}
export default Signin;
