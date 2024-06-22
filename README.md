# Advanced Form Handling in React

This project demonstrates advanced form handling in React, including conditional logic, dynamic sections, and integration with external APIs. The project includes three different forms: Event Registration, Job Application, and a Survey Form.

## Table of Contents

- [Advanced Form Handling in React](#advanced-form-handling-in-react)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Event Registration Form](#event-registration-form)
    - [Job Application Form](#job-application-form)
    - [Survey Form](#survey-form)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Form Details](#form-details)
    - [Event Registration Form](#event-registration-form-1)
    - [Job Application Form](#job-application-form-1)
    - [Survey Form](#survey-form-1)
  - [Additional Features](#additional-features)

## Features

### Event Registration Form
- Collects attendee information.
- Includes a conditional guest name field.
- Validates required fields and email format.
- Displays a summary upon submission.

### Job Application Form
- Collects applicant information.
- Dynamically shows fields based on the position applied for.
- Validates required fields, including email, phone number, and relevant experience.
- Displays a summary upon submission.

### Survey Form
- Collects survey responses based on selected topic (Technology, Health, Education).
- Shows relevant sections based on the selected topic.
- Fetches additional questions from an external API.
- Validates required fields and feedback length.
- Displays a summary along with additional questions upon submission.

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js and npm installed

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/DhirajsGithub/dynamic-forms
    cd dynamic-forms
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the React app:**

    ```sh
    npm run dev
    ```

## Usage

- Navigate to `http://localhost:5173/` to see the app in action.
- Use the slider at the top to switch between Event Registration, Job Application and Survey form.
- Fill out the forms and submit to see the data summary.


## Form Details

### Event Registration Form
- **Fields**: Name, Email, Age, Are you attending with a guest?, Guest Name (conditional)
- **Validation**: All fields are required; Email must be valid; Age must be greater than 0; Guest Name required if attending with a guest.
- **Summary**: Displays entered data on submission.

### Job Application Form
- **Fields**: Full Name, Email, Phone Number, Applying for Position, Relevant Experience (conditional), Portfolio URL (conditional), Management Experience (conditional), Additional Skills, Preferred Interview Time.
- **Validation**: All fields are required based on conditions; Email must be valid; Phone Number must be valid.
- **Summary**: Displays entered data on submission.

### Survey Form
- **Fields**: Full Name, Email, Survey Topic, Topic-specific fields (conditional), Feedback.
- **Validation**: All fields are required based on conditions; Email must be valid; Feedback must be at least 50 characters.
- **Summary**: Displays entered data 
- 
## Additional Features

- **Responsive Design**: Ensures a great user experience on both desktop and mobile devices.
- **Form Validation**: Custom hooks for form validation to handle complex logic.

- **User-Friendly Interface**: Clear error messages and intuitive form navigation.
