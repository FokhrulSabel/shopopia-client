import { useMemo } from "react";
import { useSelector } from "react-redux";

/**
 * Custom hook to get optimized cart and wishlist data for navbar
 * Uses useMemo to prevent unnecessary recalculations
 */
export const useNavbarData = () => {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated || false);

  const cartCount = useMemo(() => cartItems.length, [cartItems.length]);
  const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems.length]);

  return {
    cartCount,
    wishlistCount,
    isAuthenticated,
  };
};
