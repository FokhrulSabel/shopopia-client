import { addToCart } from "@/features/cart/store/cartSlice";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="
    flex
    justify-between
    items-center
    border
    p-3
   "
    >
      <div>
        <h3 className="font-bold">{item.title}</h3>

        <p>${item.price}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch(addToCart(item))}
          className="
      bg-primary
      text-white
      px-3
      py-1
     "
        >
          Move to Cart
        </button>

        <button
          onClick={() => dispatch(removeFromWishlist(item.id))}
          className="text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
