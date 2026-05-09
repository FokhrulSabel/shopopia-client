import { Link } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 shrink-0"
      aria-label="Homepage"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black text-white font-bold text-lg">
        S
      </div>

      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-bold text-lg tracking-tight">SHOPOPIA</span>

        <span className="text-xs text-muted-foreground">Modern Commerce</span>
      </div>
    </Link>
  );
};

export default NavbarBrand;
