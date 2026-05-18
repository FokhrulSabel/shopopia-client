import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div
      className="
    text-center
    py-10
   "
    >
      <h2
        className="
     text-2xl
     font-bold
     text-green-600
    "
      >
        Order Placed Successfully!
      </h2>

      <Link
        to="/"
        className="
     block
     mt-6
     text-blue-500
    "
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccessPage;
