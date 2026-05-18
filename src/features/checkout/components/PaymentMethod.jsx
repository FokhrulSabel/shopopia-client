const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="space-y-2 mt-4">
      <label>
        <input
          type="radio"
          value="card"
          checked={paymentMethod === "card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Credit Card
      </label>

      <label>
        <input
          type="radio"
          value="cod"
          checked={paymentMethod === "cod"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Cash on Delivery
      </label>
    </div>
  );
};

export default PaymentMethod;
