# Front-End Take-Home Challenge: Opportunity Tracker

Welcome! We're excited to see your work. This challenge simulates a typical task you might encounter on our team: building a new feature for one of our internal tools.

Your goal is to implement a simple single-page application that acts as an **Opportunity Tracker**. You will be building the front-end to create, view, and manage business opportunities using a live backend API.

The starter project, design files, and API documentation are detailed below. Good luck!

---

## The Task

Your goal is to implement a simple single-page application (SPA) to create, view, and manage business opportunities. The application will have two main pages:

1.  A form to create new opportunities.
2.  A page to list, search, and delete existing opportunities.

This starter project is a Vite + React + TypeScript application. You will be working with a live backend API that requires session-based authentication.

---

## Design Files

A design mockup for this challenge can be found at the following link. Please aim to create an implementation that closely matches the provided designs for both desktop and mobile layouts.

- **[Link to your Figma, Zeplin, or image file here]**

---

## Getting Started

Follow these steps to get the project running and connected to the API.

**1. Install Dependencies**
Open your terminal, navigate to the project root, and run:

```bash
npm install
```

**2. Configure Your Environment**
This project requires an API URL to function.

- Create a new file in the root of this project named `.env`.
- Copy and paste the following content into it:

  ```
  VITE_API_URL=https://your-live-api-url.com/api
  ```

  _(Note: Replace `https://your-live-api-url.com/api` with the actual API URL.)_

**3. Start the Application**
Run the following command to start the local development server:

```bash
npm start
```

Your browser will open to `http://localhost:3000`. You will see a "Start Page" asking for your email.

**4. Authenticate Your Session**
Enter your email and click "Start Session." This will communicate with our backend to create a unique, temporary session for you. The session token will be automatically saved in your browser's Local Storage and used for all subsequent API calls. Once authenticated, you will be taken to the application's home page.

---

## Constraints & Guidelines

Please adhere to the following constraints while completing the challenge:

- **Technology:** This project must be completed using **TypeScript**, **functional components**, and **React Hooks**. Please do not use class components.
- **Libraries:** You are free to use any libraries you see fit.
- **Styling:** You have complete freedom in your styling approach. You can use plain CSS, CSS Modules, Tailwind CSS, or any CSS-in-JS library you prefer.

---

## Requirements

Please implement the following features.

### Functional Requirements

- [ ] **Create Opportunities:**

  - There should be a form page (e.g., at a `/form` route).
  - The form must contain fields for `Title`, `Description`, and `Amount`.
  - All form fields are required.
  - Implement the following front-end validation:
    - `Title`: Maximum 100 characters.
    - `Description`: Maximum 500 characters.
    - `Amount`: Must be a number with a maximum value of 10,000,000.
  - Display a helpful error message to the user if validation fails.
  - On successful submission, the form should clear, and the user should be redirected to the opportunity list page.

- [ ] **List Opportunities:**

  - There should be a page that displays all the opportunities you have created (e.g., at a `/list` route).
  - This page must include a search bar that filters the list of opportunities by `Title` as the user types. The filtering should happen via an API call.

- [ ] **Delete Opportunities:**
  - Each opportunity in the list should have a "Delete" button.
  - Clicking "Delete" should remove the item from the backend and update the list in the UI.

### UI/UX Requirements

- [ ] **Responsive Layout:**

  - The listing page should have a responsive design that looks good on both mobile and desktop screens, as shown in the design files.

- [ ] **Text Truncation:**
  - In the opportunity list, if a `Title` is too long to fit in its container, it must be truncated with an ellipsis (...).
  - If a `Description` is too long, it must be truncated to a maximum of two lines with an ellipsis (...).

---

## API Documentation

Your application will communicate with our live backend. The base URL is configured in your `.env` file.

**Authentication:** All endpoints listed below are protected. The provided API client in this template is already configured to automatically read your session token from Local Storage and send it in the `Authorization: Bearer <token>` header on every request.

---

## Submission Instructions

## Submission Instructions

1.  When you have completed the challenge, create a **new private repository** on your personal GitHub account.
2.  Push all your code (including your git history) to this new private repository.
3.  Invite the following GitHub user(s) as collaborators to your private repository so we can review your work. This is a critical step.
    - `inflex13`
    - `yevgeniy-akimenko`
    - `Nuccino92`
4.  Return to the application running on `localhost:3000`. There will be a section for you to submit your final work.
5.  Paste the URL of your **private** GitHub repository into the submission form and click "Submit."

---

## What We're Looking For

- **Correctness:** Does the application meet all the functional requirements and work as expected?
- **Design Implementation:** How closely does your implementation match the provided design files for responsiveness, layout, and visual details?
- **Code Quality:** Is the code clean, well-organized, and easy to read? Do you use modern React practices and TypeScript effectively?
- **State Management:** How do you handle application state? Is it logical and efficient?

We look forward to seeing your solution!
