import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";



const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.wishlist);

  const isSaved = items.find((item) => item.id === product.id);

  const handleClick = () => {
    if (isSaved) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
    text-red-500
    text-xl
   "
    >
      {isSaved ? "❤️" : "🤍"}
    </button>
  );
};

export default WishlistButton;
