import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/surveyForm.css";
import useFormValidation from "../hooks/useFormValidation";

const SurveyForm = ({ onSubmit }) => {
  const [surveyTopic, setSurveyTopic] = useState("");
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const { values, errors, handleChange, handleSubmit, setValues } =
    useFormValidation(
      {
        fullName: "",
        email: "",
        surveyTopic: "",
        favoriteLanguage: "",
        yearsExperience: "",
        exerciseFrequency: "",
        dietPreference: "",
        highestQualification: "",
        fieldOfStudy: "",
        feedback: "",
      },
      validate
    );

  useEffect(() => {
    if (surveyTopic) {
      fetchAdditionalQuestions(surveyTopic);
    }
  }, [surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await axios.get(
        `https://api.example.com/survey/${topic}`
      );
      setAdditionalQuestions(response.data);
    } catch (error) {
      console.error("Error fetching additional questions", error);
    }
  };

  function validate(values) {
    let errors = {};
    if (!values.fullName) errors.fullName = "Full Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      errors.email = "Email address is invalid";
    if (!values.surveyTopic) errors.surveyTopic = "Survey Topic is required";

    if (values.surveyTopic === "Technology") {
      if (!values.favoriteLanguage)
        errors.favoriteLanguage = "Favorite Programming Language is required";
      if (!values.yearsExperience)
        errors.yearsExperience = "Years of Experience is required";
    }

    if (values.surveyTopic === "Health") {
      if (!values.exerciseFrequency)
        errors.exerciseFrequency = "Exercise Frequency is required";
      if (!values.dietPreference)
        errors.dietPreference = "Diet Preference is required";
    }

    if (values.surveyTopic === "Education") {
      if (!values.highestQualification)
        errors.highestQualification = "Highest Qualification is required";
      if (!values.fieldOfStudy)
        errors.fieldOfStudy = "Field of Study is required";
    }

    if (!values.feedback) errors.feedback = "Feedback is required";
    else if (values.feedback.length < 50)
      errors.feedback = "Feedback must be at least 50 characters";

    return errors;
  }

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h2>Survey Form</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Survey Topic</label>
        <select
          name="surveyTopic"
          value={values.surveyTopic}
          onChange={(e) => {
            handleChange(e);
            setSurveyTopic(e.target.value);
            setValues((prevValues) => ({
              ...prevValues,
              surveyTopic: e.target.value,
            }));
          }}
        >
          <option value="">Select a topic</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
      </div>

      {surveyTopic === "Technology" && (
        <div className="technology-section">
          <div className="form-group">
            <label>Favorite Programming Language</label>
            <select
              name="favoriteLanguage"
              value={values.favoriteLanguage}
              onChange={handleChange}
            >
              <option value="">Select a language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
            {errors.favoriteLanguage && (
              <p className="error">{errors.favoriteLanguage}</p>
            )}
          </div>
          <div className="form-group">
            <label>Years of Experience</label>
            <input
              type="number"
              name="yearsExperience"
              value={values.yearsExperience}
              onChange={handleChange}
            />
            {errors.yearsExperience && (
              <p className="error">{errors.yearsExperience}</p>
            )}
          </div>
        </div>
      )}

      {surveyTopic === "Health" && (
        <div className="health-section">
          <div className="form-group">
            <label>Exercise Frequency</label>
            <select
              name="exerciseFrequency"
              value={values.exerciseFrequency}
              onChange={handleChange}
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && (
              <p className="error">{errors.exerciseFrequency}</p>
            )}
          </div>
          <div className="form-group">
            <label>Diet Preference</label>
            <select
              name="dietPreference"
              value={values.dietPreference}
              onChange={handleChange}
            >
              <option value="">Select preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.dietPreference && (
              <p className="error">{errors.dietPreference}</p>
            )}
          </div>
        </div>
      )}

      {surveyTopic === "Education" && (
        <div className="education-section">
          <div className="form-group">
            <label>Highest Qualification</label>
            <select
              name="highestQualification"
              value={values.highestQualification}
              onChange={handleChange}
            >
              <option value="">Select qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.highestQualification && (
              <p className="error">{errors.highestQualification}</p>
            )}
          </div>
          <div className="form-group">
            <label>Field of Study</label>
            <input
              type="text"
              name="fieldOfStudy"
              value={values.fieldOfStudy}
              onChange={handleChange}
            />
            {errors.fieldOfStudy && (
              <p className="error">{errors.fieldOfStudy}</p>
            )}
          </div>
        </div>
      )}

      <div className="form-group">
        <label>Feedback</label>
        <textarea
          name="feedback"
          value={values.feedback}
          onChange={handleChange}
        />
        {errors.feedback && <p className="error">{errors.feedback}</p>}
      </div>

      {additionalQuestions.length > 0 && (
        <div className="additional-questions">
          <h3>Additional Questions</h3>
          {additionalQuestions.map((question, index) => (
            <div key={index} className="form-group">
              <label>{question.questionText}</label>
              <input
                type="text"
                name={`additionalQuestion${index}`}
                value={values[`additionalQuestion${index}`]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
