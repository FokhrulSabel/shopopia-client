import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="border p-4">
      <h2 className="font-bold">Order Summary</h2>

      {items.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>
            {item.title} ×{item.quantity}
          </span>

          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <hr className="my-3" />

      <h3 className="font-bold">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default OrderSummary;
