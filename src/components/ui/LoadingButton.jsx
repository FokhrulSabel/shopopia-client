import { Loader2 } from "lucide-react";

export default function LoadingButton({
  isLoading,
  children,
  className,
  ...props
}) {
  return (
    <button
      disabled={isLoading || props.disabled}
      className={`flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 ${className || ""}`}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
      {children}
    </button>
  );
}
