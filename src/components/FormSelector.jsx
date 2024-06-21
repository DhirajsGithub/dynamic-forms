import React from "react";
import "../styles/formSelector.css";

const FormSelector = ({ selectedForm, onSelect }) => {
  return (
    <div className="form-selector">
      <button
        className={selectedForm === "event" ? "selected" : ""}
        onClick={() => onSelect("event")}
      >
        Event Registration
      </button>
      <button
        className={selectedForm === "job" ? "selected" : ""}
        onClick={() => onSelect("job")}
      >
        Job Application
      </button>
      <button
        className={selectedForm === "survey" ? "selected" : ""}
        onClick={() => onSelect("survey")}
      >
        Survey Form
      </button>
    </div>
  );
};

export default FormSelector;
