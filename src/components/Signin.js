import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signin() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Signin">
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
        <p>{errors?.name &&errors.name.message}</p>
        <div className="Password-container">
          <label>password:</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: "enter the password" })}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <p>{errors?.password &&errors.password.message}</p>
        <div className="Submit-container">
          <input type="submit" value="submit"></input>
        </div>
      </form>

      <Link to="/signup">Sign-Up?</Link>
    </div>
  );
}
export default Signin;
