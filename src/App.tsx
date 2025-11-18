import { useSession } from "./context/SessionContext";
import { Outlet } from "react-router";
import StartPage from "./pages/StartPage";

function App() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <StartPage />;
  }

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
