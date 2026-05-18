export const validateAddress = (data) => {
  return data.fullName && data.address && data.city && data.postalCode;
};
