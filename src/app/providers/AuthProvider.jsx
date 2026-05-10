import { useAuthListener } from "@/features/auth/hooks/useAuthListener";

const AuthProvider = ({ children }) => {
  useAuthListener();

  return children;
};

export default AuthProvider;
