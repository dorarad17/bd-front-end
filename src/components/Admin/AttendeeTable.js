import { React, useState, useEffect } from "react";
import axios from "axios";

function AttendeeTable() {
  const [attendees, setAttendeeList] = useState([]);

  var getAttendees = () => {
    axios
      .get("http://localhost:8081/attendees")
      .then((response) => {
        // handle success
        // push new task to array
        const allAttendees = response.data;
        console.log(allAttendees);
        setAttendeeList(allAttendees);
        console.log(attendees);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  };

  getAttendees();

  return <p>People coming: </p>;
}

export default AttendeeTable;
