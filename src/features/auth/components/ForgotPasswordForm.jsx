import { useState } from "react";
import { Link } from "react-router-dom";
import { useForgotPassword } from "../hooks/useForgotPassword";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import LoadingButton from "./LoadingButton";
import { PATHS } from "@/routes/path";



const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const { mutateAsync, isPending, isSuccess } = useForgotPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    await mutateAsync(email);
  };

  return (
    <AuthCard>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Reset Password</h1>

          <p className="text-muted-foreground">
            Enter your email to receive a password reset link
          </p>
        </div>

        {isSuccess ? (
          <div
            className="
              rounded-2xl
              border
              border-green-500/20
              bg-green-500/10
              p-4
              text-sm
              text-green-600
            "
          >
            Password reset email sent successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <LoadingButton loading={isPending} type="submit">
              Send Reset Link
            </LoadingButton>
          </form>
        )}

        <div className="text-center">
          <Link
            to={PATHS.LOGIN}
            className="
              text-sm
              font-medium
              text-primary
              transition-colors
              hover:underline
            "
          >
            Back to Login
          </Link>
        </div>
      </div>
    </AuthCard>
  );
};

export default ForgotPasswordForm;
