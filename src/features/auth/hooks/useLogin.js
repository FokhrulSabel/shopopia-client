import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAPI } from "../services/authService";
import { setCredentials } from "../store/authSlice";

import { PATHS } from "@/routes/path";

export const useLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginAPI,

    onSuccess: (data) => {
      dispatch(setCredentials(data));

      navigate(PATHS.PROFILE);
    },
  });
};
