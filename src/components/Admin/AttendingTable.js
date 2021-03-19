import { React } from "react";
import Button from "react-bootstrap/Button";

function AttendingTable({ attendees }) {
  return (
    <div className="row">
      <div className="card w-75 attendeeList">
        <div className="card-body">
          <p>Coming </p>
          {attendees.map((item) => (
            <p>
              {item.attending === true && (
                <p key={item.firstName}>
                  {item.firstName} {item.lastName}{" "}
                  <Button className="float-right" variant="danger"></Button>{" "}
                </p>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttendingTable;
