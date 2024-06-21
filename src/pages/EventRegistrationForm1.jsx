import React, { useState } from "react";
import useForm from "../hooks/useForm";
import validate from "../helpers/validate";
import "../styles/form1Style.css";

const EventRegistrationForm1 = ({ onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    handleFormSubmit,
    validate
  );

  function handleFormSubmit() {
    onSubmit(values);
  }

  return (
    <div className="form-container">
      <h2>Event Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
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
          <label>Age</label>
          <input
            min={0}
            type="number"
            name="age"
            value={values.age || ""}
            onChange={handleChange}
            required
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="form-group">
          <label>Are you attending with a guest?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="attendingWithGuest"
                value="yes"
                checked={values.attendingWithGuest === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="attendingWithGuest"
                value="no"
                checked={values.attendingWithGuest === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        {values.attendingWithGuest === "yes" && (
          <div className="form-group">
            <label>Guest Name</label>
            <input
              type="text"
              name="guestName"
              value={values.guestName || ""}
              onChange={handleChange}
              required
            />
            {errors.guestName && <p className="error">{errors.guestName}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistrationForm1;
