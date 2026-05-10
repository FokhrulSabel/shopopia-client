import { memo } from "react";

import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/routes/path";
import { logout } from "@/features/auth/store/authSlice";



const NavbarAuthSection = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <div className="hidden items-center gap-3 md:flex">
        <NavLink to={PATHS.PROFILE}>
          <Button variant="ghost" className="rounded-2xl">
            {user?.name}
          </Button>
        </NavLink>

        <Button
          onClick={() => dispatch(logout())}
          variant="outline"
          className="rounded-2xl"
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-2 md:flex">
      <NavLink to={PATHS.LOGIN}>
        <Button variant="ghost" className="rounded-2xl px-4">
          Login
        </Button>
      </NavLink>

      <NavLink to={PATHS.REGISTER}>
        <Button className="rounded-2xl px-5">Register</Button>
      </NavLink>
    </div>
  );
};

export default memo(NavbarAuthSection);
