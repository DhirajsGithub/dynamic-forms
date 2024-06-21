import React from "react";
import "../styles/summaryStyle.css";

const JobApplicationSummary = ({ formData, onEdit }) => {
  return (
    <div className="summary-container">
      <h2>Application Summary</h2>
      <div className="summary-content">
        <p>
          <strong>Full Name:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {formData.phoneNumber}
        </p>
        <p>
          <strong>Applying for Position:</strong> {formData.position}
        </p>
        {(formData.position === "Developer" ||
          formData.position === "Designer") && (
          <p>
            <strong>Relevant Experience:</strong> {formData.experience} years
          </p>
        )}
        {formData.position === "Designer" && (
          <p>
            <strong>Portfolio URL:</strong>{" "}
            <a
              style={{ color: "inherit", textDecoration: "underline" }}
              href={formData.portfolio}
            >
              {formData.portfolio}
            </a>
          </p>
        )}
        {formData.position === "Manager" && (
          <p>
            <strong>Management Experience:</strong>{" "}
            {formData.managementExperience}
          </p>
        )}
        <p>
          <strong>Additional Skills:</strong> {formData.skills.join(", ")}
        </p>
        <p>
          <strong>Preferred Interview Time:</strong>{" "}
          {new Date(formData.interviewTime).toLocaleString()}
        </p>
      </div>
      <button onClick={onEdit} className="edit-button">
        Edit
      </button>
    </div>
  );
};

export default JobApplicationSummary;
