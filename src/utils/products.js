export const formatPrice = (price) =>
  isNaN(price) ? "0" : new Intl.NumberFormat("ko-KR").format(price);

export const formatDate = (dateStr) => {
  if (!dateStr) return "0000.00.00";
  const dateObj = new Date(dateStr);
  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, "0")}.${String(
    dateObj.getDate()
  ).padStart(2, "0")}`;
};
