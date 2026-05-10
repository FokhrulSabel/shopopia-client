import { Button } from "@/components/ui/Button";
import { PATHS } from "@/routes/path";
import { Link } from "react-router";





const NavbarAuthButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Link to={PATHS.LOGIN}>
        <Button
          variant="ghost"
          className="rounded-xl"
        >
          Login
        </Button>
      </Link>

      <Link to={PATHS.REGISTER}>
        <Button
          className="
            rounded-xl
            bg-black
            text-white
            hover:bg-black/90
          "
        >
          Register
        </Button>
      </Link>
    </div>
  );
};

export default NavbarAuthButtons;