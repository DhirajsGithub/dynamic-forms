export default function validateJobAppl(values) {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = "Full Name is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  } else if (String(values.phoneNumber).length < 10) {
    errors.phoneNumber = "Phone Number must be 10 digits";
  } else if (!/^\d+$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number must be a valid number";
  }

  if (
    (values.position === "Developer" || values.position === "Designer") &&
    (!values.experience || values.experience <= 0)
  ) {
    errors.experience = "Relevant Experience must be greater than 0";
  }

  if (
    values.position === "Designer" &&
    (!values.portfolio || !/^https?:\/\/\S+\.\S+/.test(values.portfolio))
  ) {
    errors.portfolio = "Portfolio URL is invalid";
  }

  if (values.position === "Manager" && !values.managementExperience) {
    errors.managementExperience = "Management Experience is required";
  }

  if (!values.skills || values.skills.length === 0) {
    errors.skills = "At least one skill must be selected";
  }

  if (!values.interviewTime) {
    errors.interviewTime = "Preferred Interview Time is required";
  }

  return errors;
}
