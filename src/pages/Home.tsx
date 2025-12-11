import SubmissionForm from '../components/SubmissionForm'
import { useSession } from '../context/SessionContext' // 2. Import the session hook

const ThankYouMessage = () => (
  <div className='page'>
    <h1>Thank You!</h1>
    <p>Your submission has been received successfully.</p>
    <p>You may now close this window.</p>
  </div>
)

export default function Home() {
  const { session } = useSession() // 3. Get the current session status

  // This check is important. If for some reason the Home page renders while
  // the session is still loading, it prevents an error.
  if (!session) {
    return <div>Loading session...</div>
  }

  // 4. If the session is submitted, show a thank you message.
  if (session.status === 'submitted') {
    return <ThankYouMessage />
  }

  // 5. Otherwise, show the normal content and the submission form.
  return (
    <div className='page'>
      <h1>The task</h1>

      <p>
        Your goal is to implement a simple single-page application (SPA) to
        create, view, and manage business opportunities. The application will
        have two main pages:
      </p>

      <ol>
        <li>A form to create new opportunities.</li>
        <li>A page to list, search, and delete existing opportunities.</li>
      </ol>

      <p>This starter project is a Vite + React + TypeScript application.</p>

      <h2>Constraints & Guidelines</h2>

      <p>
        Please adhere to the following constraints while completing the
        challenge:
      </p>

      <ul>
        <li>
          <span className='code'>Technology</span>: This project must be
          completed using <span className='code'>TypeScript</span>,{' '}
          <span className='code'>functional components</span>, and{' '}
          <span className='code'>React Hooks</span>. Please do not use class
          components.
        </li>
        <li>
          <span className='code'>Libraries</span>: You are free to use any
          libraries you see fit.
        </li>
        <li>
          <span className='code'>Styling</span>: You have complete freedom in
          your styling approach. You can use plain CSS, CSS Modules, Tailwind
          CSS, or any CSS-in-JS library you prefer.
        </li>
      </ul>

      <h2>Requirements</h2>

      <p>Please implement the following features.</p>

      <h3>Functional Requirements</h3>

      <h4>Create Opportunities</h4>

      <ul>
        <li>
          There should be a form page (at the{' '}
          <a href='/form'>
            <span className='code'>/form</span>
          </a>{' '}
          route).
        </li>
        <li>
          The form must contain fields for <span className='code'>Title</span>,{' '}
          <span className='code'>Description</span>, and{' '}
          <span className='code'>Amount</span>.
        </li>
        <li>All form fields are required.</li>
        <li>
          Implement the following front-end validation:
          <ul>
            <li>
              <span className='code'>Title</span>: Maximum 100 characters.
            </li>
            <li>
              <span className='code'>Description</span>: Maximum 500 characters.
            </li>
            <li>
              <span className='code'>Amount</span>: Must be a number with a
              maximum value of 10,000,000.
            </li>
          </ul>
        </li>
        <li>
          Display a helpful error message to the user if validation fails.
        </li>
        <li>
          On successful submission, the form should clear, and the user should
          be redirected to the opportunity list page.
        </li>
      </ul>

      <h4>List Opportunities</h4>

      <ul>
        <li>
          There should be a page that displays all the opportunities you have
          created (at the{' '}
          <a href='/list'>
            <span className='code'>/list</span>
          </a>{' '}
          route).
        </li>
        <li>
          This page must include a search bar that filters the list of
          opportunities by <span className='code'>Title</span> as the user
          types. The filtering should happen via an API call.
        </li>
      </ul>

      <h4>Delete Opportunities</h4>

      <ul>
        <li>Each opportunity in the list should have a "Delete" button.</li>
        <li>
          Clicking "Delete" should remove the item from the backend and update
          the list in the UI.
        </li>
      </ul>

      <h3>UI/UX Requirements</h3>

      <h4>Responsive Layout</h4>

      <ul>
        <li>
          The listing page should have a responsive design that looks good on
          both mobile and desktop screens, as shown in the design files.
        </li>
      </ul>

      <h4>Text Truncation</h4>

      <ul>
        <li>
          In the opportunity list, if a <span className='code'>Title</span> is
          too long to fit in its container, it must be truncated with an
          ellipsis (...).
        </li>
        <li>
          If a <span className='code'>Description</span> is too long, it must be
          truncated to a maximum of two lines with an ellipsis (...).
        </li>
      </ul>

      <h2>API Documentation</h2>

      <p>
        Your application will communicate with our live backend. The base URL is
        configured in your <span className='code'>.env</span> file. Here are the
        API endpoints that you will need to use in the app:
      </p>

      <ul>
        <li>
          <span className='code'>GET /opportunities</span> - Get all
          opportunities
        </li>
        <li>
          <span className='code'>POST /opportunities</span> - Create a new
          opportunity. This endpoint expects the following JSON payload:
          <ul>
            <li>
              <span className='code'>title</span>: string, maximum 100
              characters
            </li>
            <li>
              <span className='code'>description</span>: string, maximum 500
              characters
            </li>
            <li>
              <span className='code'>amount</span>: number, maximum value: 10M
            </li>
          </ul>
        </li>
        <li>
          <span className='code'>DELETE /opportunities/:id</span> - Delete an
          opportunity
        </li>
      </ul>

      <h2>What We're Looking For</h2>

      <ul>
        <li>
          <span className='code'>Correctness:</span> Does the application meet
          all the functional requirements and work as expected?
        </li>
        <li>
          <span className='code'>Design Implementation:</span> How closely does
          your implementation match the provided design files for
          responsiveness, layout, and visual details?
        </li>
        <li>
          <span className='code'>Code Quality:</span> Is the code clean,
          well-organized, and easy to read? Do you use modern React practices
          and TypeScript effectively?
        </li>
        <li>
          <span className='code'>State Management:</span> How do you handle
          application state? Is it logical and efficient?
        </li>
      </ul>

      <h2>Submission Instructions</h2>

      <ol>
        <li>
          When you have completed the challenge, create a{' '}
          <span className='code'>new private repository</span> on your personal
          GitHub account.
        </li>
        <li>
          Push all your code (including your git history) to this new private
          repository.
        </li>
        <li>
          Invite the following GitHub users as collaborators to your private
          repository so we can review your work. This is a critical step.
          <ul>
            <li>
              <span className='code'>inflex13</span>
            </li>
            <li>
              <span className='code'>yevgeniy-akimenko</span>
            </li>
            <li>
              <span className='code'>Nuccino92</span>
            </li>
          </ul>
        </li>
        <li>
          Paste the URL of your <span className='code'>private</span> GitHub
          repository into the submission form and click "Submit Final Work".
        </li>
      </ol>

      <SubmissionForm />
    </div>
  )
}
