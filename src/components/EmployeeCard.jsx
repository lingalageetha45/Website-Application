import React from "react";

export default function EmployeeCard({
  id,
  name,
  department,
  email,
  deleteEmployee,
  editEmployee,
}) {
  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="employee-card">

      <div className="avatar-circle">
        {getInitials(name)}
      </div>

      <h3>{name}</h3>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

    
      <div className="btn-group">

        <button
          className="edit"
          onClick={() => editEmployee && editEmployee()}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={() => deleteEmployee(id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}