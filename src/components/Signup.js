import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "bootstrap/dist/css/bootstrap.css";

function Signup() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onSubmit",
  });

  function onSubmit(data) {
    console.log(data); // { username: 'test', email: 'test', password: 'test' }
  }

  return (
    <div className="form mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            name="firstName"
            placeholder="First name"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            ref={register({
              required: "First name is required",
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="firstName"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group">
          <input
            name="lastName"
            placeholder="Last name"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            ref={register({
              required: "Last name is required",
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="lastName"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            placeholder="Email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address format",
              },
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="email"
            as="div"
            errors={errors}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={formState.isSubmitting}
        >
          APPLY
        </button>
      </form>
    </div>
  );
}

export default Signup;
