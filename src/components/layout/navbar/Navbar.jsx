import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import NavbarBrand from "./NavbarBrand";
import NavbarActions from "./NavbarActions";
import NavbarMobileMenu from "./NavbarMobileMenu";
// import NavbarProfileMenu from "./NavbarProfileMenu";

import { navLinks } from "./navLinks";

// import { Button } from "@/components/ui/button";
// import { PATHS } from "@/routes/path";
import NavbarAuthSection from "./NavbarAuthSection";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart?.items || []);

  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  // const { isAuthenticated } = useSelector((state) => state.auth);

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
              <nav className="hidden xl:flex items-center gap-8">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `
                        whitespace-nowrap
                        text-sm
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

            {/* RIGHT */}
            <div className="flex items-center gap-1 sm:gap-2">
              <NavbarActions
                cartCount={cartItems.length}
                wishlistCount={wishlistItems.length}
                onMobileMenuOpen={() => setMobileOpen(true)}
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
