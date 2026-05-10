import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { registerAPI } from "../services/authService";
import { loginSuccess } from "../store/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerAPI(form);

    dispatch(loginSuccess(res));

    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
