import React from "react";
import AttendeeTable from "./AttendeeTable";

function Admin() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-8 align-center">
          <AttendeeTable />
        </div>
      </div>
    </div>
  );
}

export default Admin;
