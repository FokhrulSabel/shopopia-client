import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = () => {
  const { items } = useSelector((state) => state.wishlist);

  return (
    <div>
      <h2
        className="
     text-xl
     font-bold
     mb-4
    "
      >
        My Wishlist
      </h2>

      {items.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        <div
          className="
      space-y-3
     "
        >
          {items.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
