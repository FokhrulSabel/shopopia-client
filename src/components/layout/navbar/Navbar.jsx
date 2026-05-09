import { useState } from "react";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import NavbarBrand from "./NavbarBrand";
import NavbarDesktopMenu from "./NavbarDesktopMenu";
import NavbarActions from "./NavbarActions";
import NavbarMobileDrawer from "./NavbarMobileMenu";


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          sticky top-0 z-50
          border-b border-white/20
          bg-white/70
          backdrop-blur-xl
          supports-[backdrop-filter]:bg-white/60
        "
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4">
            <div className="flex items-center gap-12">
              <NavbarBrand />

              <NavbarDesktopMenu />
            </div>

            <NavbarActions
              cartCount={cartItems.length}
              wishlistCount={wishlistItems.length}
              onSearchOpen={() => {}}
              onMobileMenuOpen={() => setMobileOpen(true)}
            />
          </div>
        </div>
      </motion.header>

      <NavbarMobileDrawer open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
};

export default Navbar;
