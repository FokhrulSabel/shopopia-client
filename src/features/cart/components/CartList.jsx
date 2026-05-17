import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const CartList = () => {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
