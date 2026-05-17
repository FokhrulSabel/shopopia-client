import { useState, memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import NavbarBrand from "./NavbarBrand";
import NavbarActions from "./NavbarActions";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarAuthSection from "./NavbarAuthSection";

import { navLinks } from "./navLinks";
import { useNavbarData } from "./useNavbarData";

const NavLink_Memo = memo(({ item }) => (
  <NavLink
    key={item.href}
    to={item.href}
    className={({ isActive }) =>
      `
        whitespace-nowrap
        text-sm
        font-medium
        transition-colors
        duration-200
        ${
          isActive
            ? "text-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }
      `
    }
  >
    {item.label}
  </NavLink>
));

NavLink_Memo.displayName = "NavLink_Memo";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, wishlistCount } = useNavbarData();

  // const { isAuthenticated } = useSelector((state) => state.auth);

  const handleMobileMenuOpen = useCallback(() => {
    setMobileOpen(true);
  }, []);

  const navLinksRender = useMemo(
    () =>
      navLinks.map((item) => <NavLink_Memo key={item.href} item={item} />),
    [],
  );

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="
          sticky top-0 z-50
          border-b border-border/50
          bg-background/80
          backdrop-blur-xl
        "
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="
            mx-auto
            w-full
            max-w-screen-2xl
            px-3
            sm:px-4
            lg:px-6
            xl:px-8
          "
        >
          <div
            className="
              flex
              h-16
              sm:h-18
              lg:h-20
              items-center
              justify-between
              gap-2
              sm:gap-4
            "
          >
            {/* LEFT */}
            <div className="flex min-w-0 items-center gap-4 lg:gap-10">
              <NavbarBrand />

              {/* Desktop Nav */}
              <nav
                className="hidden xl:flex items-center gap-8"
                role="menubar"
                aria-label="Main menu"
              >
                {navLinksRender}
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-1 sm:gap-2">
              <NavbarActions
                cartCount={cartCount}
                wishlistCount={wishlistCount}
                onMobileMenuOpen={handleMobileMenuOpen}
              />

              {/* Auth */}
              <NavbarAuthSection />
              {/* {isAuthenticated ? (
                <NavbarProfileMenu />
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <NavLink to={PATHS.LOGIN}>
                    <Button
                      variant="ghost"
                      className="
                        rounded-xl
                        px-4
                      "
                    >
                      Login
                    </Button>
                  </NavLink>

                  <NavLink to={PATHS.REGISTER}>
                    <Button
                      className="
                        rounded-xl
                        px-5
                      "
                    >
                      Register
                    </Button>
                  </NavLink>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </motion.header>

      <NavbarMobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
};

export default Navbar;
