import { useDispatch } from "react-redux";

import { removeFromCart, updateQuantity } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="
    flex
    gap-4
    items-center
    border-b
    py-4
   "
    >
      <img src={item.image} className="w-16 h-16" />

      <div className="flex-1">
        <h3>{item.title}</h3>

        <p>${item.price}</p>
      </div>

      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) =>
          dispatch(
            updateQuantity({
              id: item.id,
              quantity: Number(e.target.value),
            }),
          )
        }
        className="
     border
     w-16
     p-1
    "
      />

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="
     text-red-500
    "
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
