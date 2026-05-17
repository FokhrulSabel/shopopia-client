import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/routes/path";
import { AlertCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <AlertCircle className="h-16 w-16 text-destructive" />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">404</h1>
          <p className="mt-2 text-xl text-muted-foreground">
            Page not found
          </p>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to={PATHS.HOME}>
          <Button className="rounded-2xl px-6">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
