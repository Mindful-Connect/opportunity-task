import SubmissionForm from "../components/SubmissionForm";
import { useSession } from "../context/SessionContext"; // 2. Import the session hook

const ThankYouMessage = () => (
  <div>
    <h1>Thank You!</h1>
    <p>Your submission has been received successfully.</p>
    <p>You may now close this window.</p>
  </div>
);

export default function Home() {
  const { session } = useSession(); // 3. Get the current session status

  // This check is important. If for some reason the Home page renders while
  // the session is still loading, it prevents an error.
  if (!session) {
    return <div>Loading session...</div>;
  }

  // 4. If the session is submitted, show a thank you message.
  if (session.status === "submitted") {
    return <ThankYouMessage />;
  }

  // 5. Otherwise, show the normal content and the submission form.
  return (
    <>
      <h1>The task</h1>
      <p>
        The task is to implement a simple to-do list app. The app should have a
        form for adding new to-do items, and a page to list the existing to-do
        items.
      </p>

      <p>
        Navigate to <span className="code">/form</span> or{" "}
        <span className="code">/list</span> to view the requirements for
        respective pages.
      </p>

      <p>Use the space under the requirements to implement the app.</p>

      <hr style={{ margin: "40px 0" }} />

      {/* The submission form will now be part of your Home page */}
      <SubmissionForm />
    </>
  );
}
