import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "bootstrap/dist/css/bootstrap.css";
import AppliedMessage from "./Applied";
import axios from "axios";

function Signup() {
  const [show, setShow] = useState(false);
  const [attendees, setAttendeeList] = useState([]);

  function addAttendee(firstName, lastName, email) {
    const attendeeToAdd = {
      id: "",
      firstName: firstName,
      lastName: lastName,
      attending: false,
      email: email,
    };

    axios
      .post("http://localhost:8081/attendees/", attendeeToAdd)
      .then((response) => {
        // handle success
        // push new task to array
        const currentAttendees = attendees;
        currentAttendees.push(attendeeToAdd);
        setAttendeeList(currentAttendees);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  }

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onSubmit",
  });

  function onSubmit(data) {
    addAttendee(data.firstName, data.lastName, data.email);
    console.log(data); // { username: 'test', email: 'test', password: 'test' }
    setShow(!show);
  }

  return (
    <div className="form mx-auto">
      {!show && (
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
      )}
      {show && <AppliedMessage />}
    </div>
  );
}

export default Signup;
