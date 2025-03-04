export const formatPrice = (price) => new Intl.NumberFormat("ko-KR").format(price);

export const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);
  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, "0")}.${String(
    dateObj.getDate()
  ).padStart(2, "0")}`;
};
