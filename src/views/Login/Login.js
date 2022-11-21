import React, { useState } from "react";
import classes from "./Login.module.scss";

function Login({ onSubmit }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { username, password } = state;
    onSubmit({ username, password });
  };
  return (
    <>
      <div className={classes.heading}>
        <h1>Sign In</h1>
      </div>
      <form className={classes.form} onSubmit={submitForm}>
        <div className={classes.input_control}>
          <label className="input-label" hidden>
            Email Address
          </label>
          <input
            type="email"
            id="username"
            onChange={handleChange}
            className={classes.input_field}
            placeholder="Email Address"
          />
        </div>
        <div className={classes.input_control}>
          <label className="input-label" hidden>
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            className={classes.input_field}
            placeholder="Password"
          />
        </div>
        <div className={classes.input_control}>
          <input
            type="submit"
            className={classes.input_submit}
            value="Sign In"
          />
        </div>
      </form>
    </>
  );
}

export default Login;
