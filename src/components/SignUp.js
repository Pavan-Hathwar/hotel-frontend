import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./generalStyle.css";
import PhoneInput from "react-phone-number-input";
import HotelEmployeeService from "../services/HotelEmployeeService";

function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userExistMessage, setUserExistMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    let employeeDetalis = {
      name: data.name,
      mobileNumber: data.mobileNumber,
      emailId: data.email,
      password: data.password,
    };
    HotelEmployeeService.enterNewEmployee(employeeDetalis).then((res) => {
      if (res.data != "") {
        setUserExistMessage("");
        navigate("/");
      }
      setUserExistMessage("User Exist");
    });
  };

  return (
    <div className="block">
      <div className>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Name-Container">
            <label>name:</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: "please enter your name" })}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <p>
            {errors?.name && errors.name.message}
            {userExistMessage}
          </p>

          <div className="PhoneNumber-Container">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobileNumber"
              {...register("mobileNumber", {
                required: "please enter your mobileNumber",
                pattern: /^[789][0-9]{9}$/i,
              })}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
          </div>
          <p>{errors?.mobileNumber && errors.mobileNumber.message}</p>

          <div className="Email-Container">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: "please enter your email" })}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <p>{errors?.email && errors.email.message}</p>

          <div className="Password-Container">
            <label>password:</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "please enter your password",
              })}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <p>{errors?.password && errors.password.message}</p>

          <div className="ConfirmPassword-Container">
            <label>Confirm password:</label>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "please enter your confirmPassword",
              })}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <p>{errors?.confirmPassword && errors.confirmPassword.message}</p>

          <div className="Submit-Container">
            <input type="submit" value="Sign Up"></input>
          </div>
        </form>
      </div>
      <div>
        <a onClick={() => navigate("/")}>Back to Sign-In</a>
      </div>
    </div>
  );
}
export default SignUp;
