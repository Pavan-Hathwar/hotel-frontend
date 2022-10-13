import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignUpDetails() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="Signin">
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
        <p>{errors?.name && errors.name.message}</p>

        <div className="PhoneNumber-Container">
          <label>Mobile Number:</label>
          <input
            type="number"
            name="mobileNumber"
            {...register("mobileNumber", {
              required: "please enter your mobileNumber",
              max: 10,
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
          <label>password:</label>
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
  );
}
export default SignUpDetails;
