import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const formatted = res.data.map((emp) => ({
        id: emp.id,
        name: emp.name,
        email: emp.email,
        department: emp.company?.name || "N/A",
      }));

      setEmployees(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (!name || !department) {
      alert("Please fill required fields");
      return;
    }

    if (editId) {
      const updated = employees.map((emp) =>
        emp.id === editId ? { ...emp, name, department } : emp
      );
      setEmployees(updated);
      setEditId(null);
    } else {
      const newEmployee = {
        id: Date.now(),
        name,
        department,
        email: "manual@employee.com",
      };
      setEmployees([...employees, newEmployee]);
    }

    setName("");
    setDepartment("");
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const editEmployee = (emp) => {
    setEditId(emp.id);
    setName(emp.name);
    setDepartment(emp.department);
  };

  const filteredEmployees = employees.filter((emp) =>
    (emp.name || "").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">

      <div className="hero-banner">
        <h1>Employee Management System</h1>
        <p>Manage, update, and track employees efficiently</p>
      </div>

      <div className="form-container">

        <input
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {editId ? "Update Employee" : "Add Employee"}
        </button>

      </div>

      <div className="search-container">

        <input
          className="search-box"
          placeholder="Search Employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setQuery(search)}>
          Search
        </button>

      </div>

      <div className="employee-grid">

        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            id={emp.id}
            name={emp.name}
            department={emp.department}
            email={emp.email}
            deleteEmployee={deleteEmployee}
            editEmployee={() => editEmployee(emp)}
          />
        ))}

      </div>

    </div>
  );
}