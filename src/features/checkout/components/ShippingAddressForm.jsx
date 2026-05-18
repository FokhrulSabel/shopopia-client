const ShippingAddressForm = ({ formData, setFormData }) => {
  return (
    <div className="space-y-3">
      <input
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) =>
          setFormData({
            ...formData,
            fullName: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <input
        placeholder="Address"
        value={formData.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <input
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <input
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={(e) =>
          setFormData({
            ...formData,
            postalCode: e.target.value,
          })
        }
        className="border p-2 w-full"
      />
    </div>
  );
};

export default ShippingAddressForm;
