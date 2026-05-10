import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerAPI } from "../services/authService";
import { setCredentials } from "../store/authSlice";

import { PATHS } from "@/routes/path";

export const useRegister = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerAPI,

    onSuccess: (data) => {
      dispatch(setCredentials(data));

      navigate(PATHS.PROFILE);
    },
  });
};
