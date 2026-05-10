import { useMutation } from "@tanstack/react-query";

import { sendPasswordResetEmail } from "firebase/auth";

import { toast } from "sonner";

import { auth } from "@/lib/firebase";

const getFirebaseErrorMessage = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/invalid-email":
      return "Invalid email address.";

    case "auth/too-many-requests":
      return "Too many requests. Try again later.";

    default:
      return "Something went wrong.";
  }
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (email) => {
      return sendPasswordResetEmail(auth, email);
    },

    onSuccess: () => {
      toast.success("Password reset email sent");
    },

    onError: (error) => {
      toast.error(getFirebaseErrorMessage(error.code));
    },
  });
};
