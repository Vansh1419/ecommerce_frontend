export const Percentage = (originalPrice, DiscountedPrice) => {
  return ((originalPrice - DiscountedPrice) / originalPrice) * 100;
};
