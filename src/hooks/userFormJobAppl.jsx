import { useState, useEffect } from "react";

const userFormJobAppl = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        callback();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => {
      const skills = prevValues.skills || [];
      return {
        ...prevValues,
        [name]: skills.includes(value)
          ? skills.filter((skill) => skill !== value)
          : [...skills, value],
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};

export default userFormJobAppl;
