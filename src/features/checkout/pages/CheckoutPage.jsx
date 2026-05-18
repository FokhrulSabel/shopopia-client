import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

const CheckoutPage = () => {
  return (
    <div
      className="
    grid
    md:grid-cols-2
    gap-6
   "
    >
      <CheckoutForm />

      <OrderSummary />
    </div>
  );
};

export default CheckoutPage;
