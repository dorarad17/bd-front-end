import React from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
  },
  input: {
    width: "100%",
  },
};

function Signup() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });

  function onSubmit(data) {
    console.log(data); // { username: 'test', email: 'test', password: 'test' }
  }

  return (
    <div style={styles.container}>
      <h4>My Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="firstname"
          ref={register({
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          style={{ ...styles.input, borderColor: errors.firstname && "red" }}
          placeholder="First Name"
        />
        <input
          name="lastname"
          ref={register({
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          style={{ ...styles.input, borderColor: errors.lastname && "red" }}
          placeholder="Last Name"
        />
        <input
          name="email"
          ref={register({
            required: true,
            validate: (input) => isEmail(input), // returns true if valid
          })}
          style={{ ...styles.input, borderColor: errors.email && "red" }}
          placeholder="Email"
        />
        <button type="submit" disabled={formState.isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
