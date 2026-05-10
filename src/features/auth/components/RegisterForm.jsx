import { useState } from "react";
import { Link } from "react-router-dom";

import LoadingButton from "@/components/ui/LoadingButton";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import { PATHS } from "@/routes/path";
import { useRegister } from "../hooks/useRegister";
import GoogleAuthButton from "./GoogleAuthButton";


const RegisterForm = () => {
  const { mutateAsync, isPending } = useRegister();

  const [formData, setFormData] = useState({
    name: "",
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
          <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>

          <p className="text-muted-foreground">
            Start your premium commerce experience
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
            name="name"
            placeholder="Full name"
            onChange={handleChange}
          />

          <AuthInput
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
          />

          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <LoadingButton isLoading={isPending} type="submit">
            Create Account
          </LoadingButton>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to={PATHS.LOGIN}
            className="font-medium text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default RegisterForm;
