import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/authService";
import { loginSuccess } from "../store/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginAPI(email, password);

    dispatch(loginSuccess(res));

    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />

      <button
        className="
     bg-primary
     text-white
     px-4
     py-2
    "
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
