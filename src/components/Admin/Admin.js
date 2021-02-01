import { React, useState, useEffect } from "react";
import axios from "axios";
import AttendingTable from "./AttendingTable";
import NotAttendingTable from "./AttendingTable";

function Admin() {
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
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col align-center">
          <AttendingTable attendees={attendees} />
          <NotAttendingTable attendees={attendees} />
        </div>
      </div>
    </div>
  );
}

export default Admin;
