import React, { useState } from "react";
import EventRegistrationForm1 from "./pages/EventRegistrationForm1";
import SummaryPage from "./pages/SummaryPage";
import "./App.css";
import JobApplicationForm from "./pages/JobApplicationForm";
import JobApplicationSummary from "./pages/JobApplicationSummary";
import FormSelector from "./components/FormSelector";
import SurveySummary from "./pages/SurveySummary";
import SurveyForm from "./pages/SurveyForm";

function App() {
  const [selectedForm, setSelectedForm] = useState("event");
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleEdit = () => {
    setFormData(null);
  };

  return (
    <div className="App">
      {!formData && (
        <FormSelector selectedForm={selectedForm} onSelect={setSelectedForm} />
      )}
      {selectedForm === "event" &&
        (formData ? (
          <SummaryPage formData={formData} onEdit={handleEdit} />
        ) : (
          <EventRegistrationForm1 onSubmit={handleFormSubmit} />
        ))}
      {selectedForm === "job" &&
        (formData ? (
          <JobApplicationSummary formData={formData} onEdit={handleEdit} />
        ) : (
          <JobApplicationForm onSubmit={handleFormSubmit} />
        ))}
      {selectedForm === "survey" &&
        (formData ? (
          <SurveySummary formData={formData} onEdit={handleEdit} />
        ) : (
          <SurveyForm onSubmit={handleFormSubmit} />
        ))}
    </div>
  );
}

export default App;
