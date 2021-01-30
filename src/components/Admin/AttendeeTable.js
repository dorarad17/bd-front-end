import { React, useState, useEffect } from "react";
import axios from "axios";

function AttendeeTable() {
  const [isLoading, setIsloading] = useState(true);
  const [attendees, setAttendeeList] = useState(["None"]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/attendees")
      .then((response) => {
        // handle success
        //console.log(response.data);
        console.log(response);
        setAttendeeList("test");
        console.log(attendees);
        setIsloading(false);
        console.log(isLoading);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  });

  return <p>People coming:</p>;
}

export default AttendeeTable;
