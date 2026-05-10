import { useAuthListener } from "./features/auth/hooks/useAuthListener";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  useAuthListener();

  return <AppRoutes />;
}

export default App;
