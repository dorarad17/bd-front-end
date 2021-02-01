import { React } from "react";

function NotAttendingTable({ attendees }) {
  console.log({ attendees });
  return (
    <div className="row">
      <div className="card w-25 attendeeList">
        <div className="card-body">
          <p>Not coming </p>
          <ul>
            {attendees.map((item) => (
              <li key={item.firstName}>
                {item.firstName} {item.lastName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotAttendingTable;
