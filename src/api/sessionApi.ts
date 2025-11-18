import type { Session } from "../types/session";

// This URL should point to your live Laravel backend API
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined. Please check your .env file.");
}

/**
 * Starts a new session or resumes an existing one.
 */
export const startSession = async (
  email: string,
  testSlug: string
): Promise<Session> => {
  const response = await fetch(`${API_URL}/sessions/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, test_slug: testSlug }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to start session");
  }

  return response.json();
};

/**
 * Submits the final work for a session.
 */
export const submitSession = async (
  token: string,
  submissionUrl: string
): Promise<{ message: string; status: "submitted" }> => {
  const response = await fetch(`${API_URL}/sessions/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ submission_url: submissionUrl }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to submit session");
  }

  return response.json();
};
