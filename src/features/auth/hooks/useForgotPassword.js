import { auth } from "@/lib/firebase";
import { useMutation } from "@tanstack/react-query";

import { sendPasswordResetEmail } from "firebase/auth";

import { toast } from "sonner";


export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (email) => {
      return sendPasswordResetEmail(auth, email);
    },

    onSuccess: () => {
      toast.success("Password reset email sent");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};
