import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { NavLink } from "react-router-dom";

import { navLinks } from "./navLinks";

const NavbarMobileDrawer = ({ open, onOpenChange }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => onOpenChange(false)}
              className={({ isActive }) =>
                `
                text-base font-medium transition-colors
                ${isActive ? "text-black" : "text-muted-foreground"}
              `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobileDrawer;
