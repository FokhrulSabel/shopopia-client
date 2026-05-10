import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const LoadingButton = ({ children, loading, className = "", ...props }) => {
  return (
    <Button
      disabled={loading}
      className={`
        h-12
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-primary
        to-purple-600
        text-sm
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.01]
        hover:shadow-xl
        ${className}
      `}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
    </Button>
  );
};

export default LoadingButton;
