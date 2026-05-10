import { NavLink } from "react-router";
import { navLinks } from "./navLinks";


const NavbarNavLinks = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `
              relative
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                isActive
                  ? "text-black"
                  : "text-muted-foreground hover:text-black"
              }
            `
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavbarNavLinks;
