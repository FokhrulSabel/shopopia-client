import { memo, useCallback } from "react";

import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/routes/path";
import { logout } from "@/features/auth/store/authSlice";

const NavbarAuthSection = memo(() => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (isAuthenticated) {
    return (
      <div
        className="hidden items-center gap-3 md:flex"
        role="menubar"
        aria-label="User menu"
      >
        <NavLink to={PATHS.PROFILE}>
          <Button
            variant="ghost"
            className="rounded-2xl transition-colors"
            title="View profile"
          >
            {user?.name || "Profile"}
          </Button>
        </NavLink>

        <Button
          onClick={handleLogout}
          variant="outline"
          className="rounded-2xl transition-colors"
          title="Logout"
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div
      className="hidden items-center gap-2 md:flex"
      role="menubar"
      aria-label="Authentication"
    >
      <NavLink to={PATHS.LOGIN}>
        <Button
          variant="ghost"
          className="rounded-2xl px-4 transition-colors"
        >
          Login
        </Button>
      </NavLink>

      <NavLink to={PATHS.REGISTER}>
        <Button className="rounded-2xl px-5 transition-colors">
          Register
        </Button>
      </NavLink>
    </div>
  );
});

NavbarAuthSection.displayName = "NavbarAuthSection";

export default NavbarAuthSection;
