import React from "react";
import "../styles/styleJobAppl.css";
import userFormJobAppl from "../hooks/userFormJobAppl";
import validateJobAppl from "../helpers/validateJobAppl";

const JobApplicationForm = ({ onSubmit }) => {
  const { values, errors, handleChange, handleCheckboxChange, handleSubmit } =
    userFormJobAppl(handleFormSubmit, validateJobAppl);

  function handleFormSubmit() {
    onSubmit(values);
  }

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={values.fullName || ""}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            value={values.phoneNumber || ""}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <label>Applying for Position</label>
          <select
            name="position"
            value={values.position || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.position && <p className="error">{errors.position}</p>}
        </div>

        {(values.position === "Developer" ||
          values.position === "Designer") && (
          <div className="form-group">
            <label>Relevant Experience (years)</label>
            <input
              type="number"
              min={0}
              name="experience"
              value={values.experience || ""}
              onChange={handleChange}
              required
            />
            {errors.experience && <p className="error">{errors.experience}</p>}
          </div>
        )}

        {values.position === "Designer" && (
          <div className="form-group">
            <label>Portfolio URL</label>
            <input
              type="text"
              name="portfolio"
              value={values.portfolio || ""}
              onChange={handleChange}
              required
            />
            {errors.portfolio && <p className="error">{errors.portfolio}</p>}
          </div>
        )}

        {values.position === "Manager" && (
          <div className="form-group">
            <label>Management Experience</label>
            <input
              type="text"
              name="managementExperience"
              value={values.managementExperience || ""}
              onChange={handleChange}
              required
            />
            {errors.managementExperience && (
              <p className="error">{errors.managementExperience}</p>
            )}
          </div>
        )}

        <div className="form-group">
          <label>Additional Skills</label>
          <div className="checkbox-group">
            {["JavaScript", "CSS", "Python"].map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={values.skills?.includes(skill) || false}
                  onChange={handleCheckboxChange}
                />
                {skill}
              </label>
            ))}
          </div>
          {errors.skills && <p className="error">{errors.skills}</p>}
        </div>

        <div className="form-group">
          <label>Preferred Interview Time</label>
          <input
            type="datetime-local"
            name="interviewTime"
            value={values.interviewTime || ""}
            onChange={handleChange}
            required
          />
          {errors.interviewTime && (
            <p className="error">{errors.interviewTime}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
