import React from "react";
import "../styles/summaryStyle.css";

const SummaryPage = ({ formData, onEdit }) => {
  return (
    <div className="summary-container">
      <h2>Registration Summary</h2>
      <div className="summary-content">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Attending with a guest:</strong>{" "}
          {formData.attendingWithGuest === "yes" ? "Yes" : "No"}
        </p>
        {formData.attendingWithGuest === "yes" && (
          <p>
            <strong>Guest Name:</strong> {formData.guestName}
          </p>
        )}
      </div>
      <button onClick={onEdit} className="edit-button">
        Edit
      </button>
    </div>
  );
};

export default SummaryPage;
