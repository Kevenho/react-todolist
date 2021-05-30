import React from "react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderColor: "#DB1D4B" } : {}}
    >
      <div className="task-title">
        <p onClick={() => handleTaskClick(task.id)}>{task.title}</p>
        <div class="icons">
          <span>{task.completed ? <FaCheckCircle /> : ""}</span>
          <FaTimesCircle onClick={() => handleTaskDelete(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default Task;
