import React, { useState } from "react";

function AddStudent({ addStudent }) {

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !score) {
      alert("Enter student details");
      return;
    }

    addStudent({
      name: name,
      score: Number(score)
    });

    setName("");
    setScore("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>

    </form>
  );
}

export default AddStudent;
