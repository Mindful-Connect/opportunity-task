import React, { useState } from "react";
import { useSession } from "../context/SessionContext";

const StartPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    // This unique slug is tied to this specific front-end repo template.
    const testSlug = "opportunity-list-challenge";

    try {
      await login(email, testSlug);
    } catch (error) {
      alert(
        `Failed to start session: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="start-page">
      <div className="start-card">
        <h1>Opportunity Challenge</h1>
        <p>Please enter your email to begin the test.</p>

        <form onSubmit={handleSubmit} className="start-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Starting..." : "Start Session"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartPage;
