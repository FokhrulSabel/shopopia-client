import { Button } from "@/components/ui/Button";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";




const NavbarActions = ({
  cartCount,
  wishlistCount,
  onSearchOpen,
  onMobileMenuOpen,
}) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={onSearchOpen}
        aria-label="Search products"
      >
        <Search className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="relative"
        aria-label="Wishlist"
      >
        <Heart className="w-5 h-5" />

        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="relative"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="w-5 h-5" />

        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMobileMenuOpen}
        aria-label="Open mobile menu"
      >
        <Menu className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default NavbarActions;
