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
        The task is to implement a "program" listing app. The app should have a
        form for adding new "programs", and a page to list the existing
        "programs".
      </p>

      <p>
        The design for both pages can be accessed{' '}
        <a
          href='https://www.figma.com/design/BVC54XVHvYOHkqKq8uJs1F/New-hires-Challenges'
          target='_blank'
        >
          on Figma
        </a>
        . Password: <span className='code'>Happly2025</span>
      </p>

      <p>
        Navigate to <a href='/form'>/form</a> or <a href='/list'>/list</a> to
        view the requirements for respective pages. Use the space under the
        requirements to implement the app.
      </p>

      <h2>What We're Looking For</h2>

      <ul>
        <li>
          <b>Correctness:</b> Does the application meet all the functional
          requirements and work as expected?
        </li>
        <li>
          <b>Design Implementation:</b> How closely does your implementation
          match the provided design files for responsiveness, layout, and visual
          details?
        </li>
        <li>
          <b>Code Quality:</b> Is the code clean, well-organized, and easy to
          read? Do you use modern React practices and TypeScript effectively?
        </li>
        <li>
          <b>State Management:</b> How do you handle application state? Is it
          logical and efficient?
        </li>
      </ul>

      <h2>Submission Instructions</h2>

      <ol>
        <li>
          When you have completed the challenge, create a{' '}
          <b>new private repository</b> on your personal GitHub account.
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
          Paste the URL of your <b>private</b> GitHub repository into the
          submission form and click "Submit Final Work".
        </li>
      </ol>

      <SubmissionForm />
    </div>
  )
}
