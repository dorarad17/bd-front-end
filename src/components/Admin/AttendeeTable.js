import { React, useState, useEffect } from "react";
import axios from "axios";

function AttendeeTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [attendees, setAttendeeList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8081/attendees")
      .then((response) => {
        // handle success
        //console.log(response.data);
        setAttendeeList(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  };

  return (
    <div>
      <p>People coming: </p>
      <p>
        <ul>
          {attendees.map((item) => (
            <li key={item.firstName}> {item.firstName}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default AttendeeTable;
