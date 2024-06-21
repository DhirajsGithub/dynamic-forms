import React from "react";
import "../styles/surveySummary.css";

const SurveySummary = ({ formData, onEdit }) => {
  return (
    <div className="summary">
      <h2>Survey Summary</h2>
      <p>
        <strong>Full Name:</strong> {formData.fullName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Survey Topic:</strong> {formData.surveyTopic}
      </p>

      {formData.surveyTopic === "Technology" && (
        <>
          <p>
            <strong>Favorite Programming Language:</strong>{" "}
            {formData.favoriteLanguage}
          </p>
          <p>
            <strong>Years of Experience:</strong> {formData.yearsExperience}
          </p>
        </>
      )}

      {formData.surveyTopic === "Health" && (
        <>
          <p>
            <strong>Exercise Frequency:</strong> {formData.exerciseFrequency}
          </p>
          <p>
            <strong>Diet Preference:</strong> {formData.dietPreference}
          </p>
        </>
      )}

      {formData.surveyTopic === "Education" && (
        <>
          <p>
            <strong>Highest Qualification:</strong>{" "}
            {formData.highestQualification}
          </p>
          <p>
            <strong>Field of Study:</strong> {formData.fieldOfStudy}
          </p>
        </>
      )}

      <p>
        <strong>Feedback:</strong> {formData.feedback}
      </p>

      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default SurveySummary;
