import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const CartSummary = () => {
  const { totalPrice, totalQuantity } = useSelector((state) => state.cart);

  return (
    <div
      className="
    border
    p-4
    rounded
    mt-6
   "
    >
      <h2>Cart Summary</h2>

      <p>Items: {totalQuantity}</p>

      <p>Total: ${totalPrice.toFixed(2)}</p>

      <Link
        to="/checkout"
        className="
     bg-primary
     text-white
     px-4
     py-2
     block
     mt-4
     text-center
    "
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
