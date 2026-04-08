import React, { useState } from "react";
import AddStudent from "../components/AddStudent.jsx";
import StudentCard from "../components/StudentCard.jsx";
import Filters from "../components/Filters.jsx";

function LMSDashboard({ logoutUser }) {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const filteredStudents = students.filter((stu) =>
    stu.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Learning Management System</h1>

      <button onClick={logoutUser}>Logout</button>

      <AddStudent addStudent={addStudent} />

      <Filters setSearch={setSearch} />

      <div className="card-container">
        {filteredStudents.map((stu, index) => (
          <StudentCard key={index} student={stu} />
        ))}
      </div>

    </div>
  );
}

export default LMSDashboard;
