import { React, useState, useEffect } from "react";
import axios from "axios";
import AttendingTable from "./AttendingTable";
import NotAttendingTable from "./NotAttendingTable";

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

  // const updateData = (id) => {
  //   var updatedAttendees = [...attendees];
  //   for (let i = 0; i < updatedAttendees.length; i++) {
  //     const attendee = updatedAttendees[i];

  //     if (attendee.id === id) {
  //       attendee.completed = completed;
  //     }
  //   }
  // };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 align-center" id="attendingCards">
          <AttendingTable attendees={attendees} />
        </div>
        <div className="col-md-4 align-center" id="attendingCards">
          <NotAttendingTable attendees={attendees} />
        </div>
      </div>
    </div>
  );
}

export default Admin;
