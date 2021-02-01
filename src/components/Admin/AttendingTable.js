import { React } from "react";

function AttendingTable({ attendees }) {
  console.log({ attendees });
  return (
    <div className="row">
      <div className="card w-25 attendeeList">
        <div className="card-body">
          <p>Coming </p>

          {attendees.map((item) => (
            <li key={item.firstName}>
              {item.firstName} {item.lastName}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttendingTable;
