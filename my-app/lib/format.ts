export function formatPrice(price: number) {
  return (price).toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}
