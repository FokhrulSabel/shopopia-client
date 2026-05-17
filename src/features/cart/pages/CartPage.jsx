import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  return (
    <div
      className="
    grid
    md:grid-cols-3
    gap-6
   "
    >
      <div className="md:col-span-2">
        <CartList />
      </div>

      <div>
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
