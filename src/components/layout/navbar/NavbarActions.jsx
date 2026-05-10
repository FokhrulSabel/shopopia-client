import { Heart, Menu, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

const NavbarActions = ({ cartCount, wishlistCount, onMobileMenuOpen }) => {
  return (
    <div className="flex items-center gap-0.5 sm:gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="
          h-9 w-9
          sm:h-10 sm:w-10
        "
      >
        <Search className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="
          relative
          h-9 w-9
          sm:h-10 sm:w-10
        "
      >
        <Heart className="h-5 w-5" />

        {wishlistCount > 0 && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-4
              w-4
              sm:h-5
              sm:w-5
              items-center
              justify-center
              rounded-full
              bg-black
              text-[9px]
              sm:text-[10px]
              text-white
            "
          >
            {wishlistCount}
          </span>
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="
          relative
          h-9 w-9
          sm:h-10 sm:w-10
        "
      >
        <ShoppingCart className="h-5 w-5" />

        {cartCount > 0 && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-4
              w-4
              sm:h-5
              sm:w-5
              items-center
              justify-center
              rounded-full
              bg-black
              text-[9px]
              sm:text-[10px]
              text-white
            "
          >
            {cartCount}
          </span>
        )}
      </Button>

      {/* Mobile Menu */}
      <Button
        variant="ghost"
        size="icon"
        className="
          h-9 w-9
          sm:h-10 sm:w-10
          xl:hidden
        "
        onClick={onMobileMenuOpen}
      >
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default NavbarActions;
