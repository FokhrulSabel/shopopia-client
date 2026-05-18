import { useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import ShippingAddressForm from "./ShippingAddressForm";
import PaymentMethod from "./PaymentMethod";
import { createOrder } from "../store/orderSlice";
import { clearCart } from "@/features/cart/store/cartSlice";



const CheckoutForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createOrder({
        items: cart.items,
        total: cart.totalPrice,
        shipping: formData,
        paymentMethod,
      }),
    );

    dispatch(clearCart());

    navigate("/order-success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ShippingAddressForm formData={formData} setFormData={setFormData} />

      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      <button
        type="submit"
        className="
     bg-primary
     text-white
     px-4
     py-2
    "
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
