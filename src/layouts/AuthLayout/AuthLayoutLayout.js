import React from "react";
import Login from "../../views/Login/Login";
import classes from "./AuthLayoutLayout.module.scss";

function AuthLayoutLayout({ onSubmit }) {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <section className={classes.wrapper}>
          <Login onSubmit={onSubmit} />
        </section>
      </div>
    </main>
  );
}

export default AuthLayoutLayout;
