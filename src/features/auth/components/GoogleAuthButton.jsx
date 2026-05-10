import { motion } from "framer-motion";

import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "../hooks/useGoogleLogin";



const GoogleAuthButton = () => {
  const { mutateAsync, isPending } = useGoogleLogin();

  const handleGoogleAuth = async () => {
    await mutateAsync();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      disabled={isPending}
      onClick={handleGoogleAuth}
      className="
        flex
        h-12
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-border/50
        bg-background/60
        px-4
        text-sm
        font-medium
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300
        hover:bg-background/80
      "
    >
      <FcGoogle className="text-xl" />
      Continue with Google
    </motion.button>
  );
};

export default GoogleAuthButton;
