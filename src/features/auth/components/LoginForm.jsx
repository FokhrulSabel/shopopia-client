import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";

import { PATHS } from "@/routes/path";
import { useLogin } from "../hooks/useLogin";
import GoogleAuthButton from "./GoogleAuthButton";
import LoadingButton from "./LoadingButton";

const LoginForm = () => {
  const { mutateAsync, isPending } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await mutateAsync(formData);
  };
  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>

          <p className="text-muted-foreground">
            Login to your Shopopai account
          </p>
        </div>

        <GoogleAuthButton />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/40" />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-3 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <AuthInput
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <Link
              to={PATHS.FORGOT_PASSWORD}
              className="
      text-sm
      text-muted-foreground
      transition-colors
      hover:text-primary
    "
            >
              Forgot password?
            </Link>
          </div>

          <LoadingButton isLoading={isPending} type="submit">
            Login
          </LoadingButton>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link
            to={PATHS.REGISTER}
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default LoginForm;
