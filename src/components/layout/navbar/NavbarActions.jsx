import { memo, useCallback } from "react";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { PATHS } from "@/routes/path";

const BadgeCount = ({ count }) => {
  if (count <= 0) return null;
  return (
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
        bg-red-600
        text-[9px]
        sm:text-[10px]
        font-semibold
        text-white
      "
    >
      {count > 99 ? "99+" : count}
    </span>
  );
};

const NavbarActions = memo(({ cartCount, wishlistCount, onMobileMenuOpen }) => {
  const navigate = useNavigate();

  const handleWishlistClick = useCallback(() => {
    navigate(PATHS.WISHLIST);
  }, [navigate]);

  const handleCartClick = useCallback(() => {
    navigate(PATHS.CART);
  }, [navigate]);

  const handleSearchClick = useCallback(() => {
    navigate(PATHS.SHOP);
  }, [navigate]);

  return (
    <div className="flex items-center gap-0.5 sm:gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="
          h-9 w-9
          sm:h-10 sm:w-10
          hover:bg-muted
          transition-colors
        "
        onClick={handleSearchClick}
        title="Search products"
        aria-label="Search"
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
          hover:bg-muted
          transition-colors
        "
        onClick={handleWishlistClick}
        title="View wishlist"
        aria-label="Wishlist"
      >
        <Heart className="h-5 w-5" />
        <BadgeCount count={wishlistCount} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="
          relative
          h-9 w-9
          sm:h-10 sm:w-10
          hover:bg-muted
          transition-colors
        "
        onClick={handleCartClick}
        title="View cart"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="h-5 w-5" />
        <BadgeCount count={cartCount} />
      </Button>

      {/* Mobile Menu */}
      <Button
        variant="ghost"
        size="icon"
        className="
          h-9 w-9
          sm:h-10 sm:w-10
          xl:hidden
          hover:bg-muted
          transition-colors
        "
        onClick={onMobileMenuOpen}
        title="Open menu"
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
});

NavbarActions.displayName = "NavbarActions";

export default NavbarActions;
