import { motion } from "framer-motion";

const AuthCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        shadow-2xl
        backdrop-blur-2xl
        sm:p-8
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-primary/10
          via-transparent
          to-purple-500/10
        "
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default AuthCard;
