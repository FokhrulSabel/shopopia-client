import { NavLink } from "react-router-dom";

import { Sheet, SheetContent } from "@/components/ui/sheet";

import { navLinks } from "./navLinks";

import { PATHS } from "@/routes/path";

import { Button } from "@/components/ui/button";

const NavbarMobileMenu = ({ open, onOpenChange }) => {
  const isAuthenticated = false;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="
          flex
          w-72
          flex-col
          border-r
          p-0
        "
      >
        {/* HEADER */}
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-bold">SHOPOPIA</h2>

          <p className="text-sm text-muted-foreground">Modern Commerce</p>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => onOpenChange(false)}
                className={({ isActive }) =>
                  `
                    text-base
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* AUTH */}
        <div className="border-t p-6">
          {isAuthenticated ? (
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-start rounded-xl"
              >
                Profile
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start rounded-xl"
              >
                Orders
              </Button>

              <Button variant="destructive" className="w-full rounded-xl">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <NavLink to={PATHS.LOGIN} onClick={() => onOpenChange(false)}>
                <Button variant="outline" className="w-full rounded-xl">
                  Login
                </Button>
              </NavLink>

              <NavLink to={PATHS.REGISTER} onClick={() => onOpenChange(false)}>
                <Button className="w-full rounded-xl">Register</Button>
              </NavLink>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobileMenu;
