import React from "react";

function StudentCard({ student }) {

  let status = "";
  let color = "";

  if (student.score >= 80) {
    status = "Excellent";
    color = "green";
  } 
  else if (student.score >= 50) {
    status = "Average";
    color = "orange";
  } 
  else {
    status = "Needs Improvement";
    color = "red";
  }

  return (
    <div className="card">

      <h3>{student.name}</h3>

      <p>Score: {student.score}</p>

      <p style={{ color: color }}>{status}</p>

    </div>
  );
}

export default StudentCard;
