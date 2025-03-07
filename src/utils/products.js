export const formatPrice = (price) =>
  isNaN(price) ? "0" : new Intl.NumberFormat("ko-KR").format(price);

export const formatDate = (dateStr) => {
  if (!dateStr) return "0000.00.00";
  const dateObj = new Date(dateStr);
  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, "0")}.${String(
    dateObj.getDate()
  ).padStart(2, "0")}`;
};

export const formatTimeBefore = (dateStr) => {
  if (!dateStr) return "0시간 전";
  const dateObj = new Date(dateStr);
  const currentTime = new Date();
  const hour = new Date(currentTime - dateObj).getTime() / (60 * 60 * 1000);
  return hour >= 24
    ? formatDate(dateStr)
    : hour < 1
    ? `${Math.ceil(hour * 100)}분 전`
    : `${Math.floor(hour)}시간 전`;
};
