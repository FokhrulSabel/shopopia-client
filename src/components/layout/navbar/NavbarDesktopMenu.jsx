import { memo } from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "./navLinks";

const NavbarDesktopMenu = memo(() => {
  return (
    <nav
      className="hidden lg:flex items-center gap-8"
      aria-label="Primary navigation"
    >
      {navLinks.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `
            relative text-sm font-medium transition-colors duration-300
            hover:text-black
            ${isActive ? "text-black" : "text-muted-foreground"}
          `
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
});

export default NavbarDesktopMenu;
