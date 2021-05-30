import React from "react";

import { FaCheckCircle } from "react-icons/fa";

import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return (
    <div
      className="task-container"
      onClick={() => handleTaskClick(task.id)}
      style={task.completed ? { borderColor: "#DB1D4B" } : {}}
    >
      <div className="task-title">
        <p>{task.title}</p>
        <span>{task.completed ? <FaCheckCircle /> : ""}</span>
      </div>
    </div>
  );
};

export default Task;
