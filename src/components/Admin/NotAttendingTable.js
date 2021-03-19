import { React } from "react";
import Button from "react-bootstrap/Button";

function NotAttendingTable({ attendees }) {
  return (
    <div className="row">
      <div className="card w-75 attendeeList align-center">
        <div className="card-body">
          <p>Cancelled </p>
          {attendees.map((item) => (
            <p>
              {item.attending === false && (
                <p key={item.firstName}>
                  {item.firstName} {item.lastName}{" "}
                  <Button className="float-right" variant="success"></Button>{" "}
                </p>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotAttendingTable;
