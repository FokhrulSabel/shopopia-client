import NavbarActions from "./NavbarActions";
import NavbarAuthButtons from "./NavbarAuthButtons";
import NavbarNavLinks from "./NavbarNavLinks";
import NavbarProfileMenu from "./NavbarProfileMenu";


const NavbarDesktop = ({ cartCount, wishlistCount, isAuthenticated }) => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <NavbarNavLinks />

      <NavbarActions cartCount={cartCount} wishlistCount={wishlistCount} />

      {isAuthenticated ? <NavbarProfileMenu /> : <NavbarAuthButtons />}
    </div>
  );
};

export default NavbarDesktop;
