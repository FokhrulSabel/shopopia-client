import { useAuthListener } from "./features/auth/hooks/useAuthListener";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/common/ErrorBoundary";

import "./App.css";

function App() {
  useAuthListener();

  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
