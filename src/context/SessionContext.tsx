import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { startSession, submitSession } from "../api/sessionApi";
import type { Session } from "../types/session";

interface SessionContextType {
  session: Session | null;
  login: (email: string, testSlug: string) => Promise<void>;
  submit: (submissionUrl: string) => Promise<void>;
  isLoading: boolean;
  token?: string;
}

const LOCAL_STORAGE_KEY = "happly-opportunity-session";

const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedSession = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedSession) {
        setSession(JSON.parse(storedSession));
      }
    } catch (error) {
      console.error("Failed to parse stored session", error);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, testSlug: string): Promise<void> => {
    const sessionData = await startSession(email, testSlug);
    setSession(sessionData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sessionData));
  };

  const submit = async (submissionUrl: string): Promise<void> => {
    if (!session) {
      throw new Error("No active session to submit.");
    }

    await submitSession(session.session_token, submissionUrl);

    const updatedSession: Session = { ...session, status: "submitted" };
    setSession(updatedSession);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedSession));
  };

  const value = {
    session,
    login,
    submit,
    isLoading,
    token: session?.session_token,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
