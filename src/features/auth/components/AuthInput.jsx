import { Input } from "@/components/ui/input";

const AuthInput = ({ className = "", ...props }) => {
  return (
    <Input
      className={`
        h-12
        rounded-2xl
        border-border/50
        bg-background/50
        text-sm
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        focus-visible:ring-2
        focus-visible:ring-primary/40
        ${className}
      `}
      {...props}
    />
  );
};

export default AuthInput;
