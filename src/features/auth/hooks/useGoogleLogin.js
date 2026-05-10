import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginWithGoogle } from "../services/firebaseAuthService";
import { setCredentials } from "../store/authSlice";
import { PATHS } from "@/routes/path";

export const useGoogleLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginWithGoogle,

    onSuccess: (data) => {
      dispatch(setCredentials(data));

      navigate(PATHS.PROFILE);
    },
  });
};
