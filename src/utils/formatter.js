const numberFormatter = new Intl.NumberFormat({ numeric: true }).format;

const dateFormatter = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  // 시간 차이 계산
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;

  // 한국어 상대 시간 포맷터
  const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

  // 1분 이내
  if (diffInSeconds < minute) {
    return rtf.format(-Math.floor(diffInSeconds), "second");
  }
  // 1시간 이내
  else if (diffInSeconds < hour) {
    return rtf.format(-Math.floor(diffInSeconds / minute), "minute");
  }
  // 1일 이내
  else if (diffInSeconds < day) {
    return rtf.format(-Math.floor(diffInSeconds / hour), "hour");
  }
  // 1주일 이내
  else if (diffInSeconds < week) {
    return rtf.format(-Math.floor(diffInSeconds / day), "day");
  }
  // 1개월 이내
  else if (diffInSeconds < month) {
    return rtf.format(-Math.floor(diffInSeconds / week), "week");
  }
  // 그 이상은 정확한 날짜 반환
  else {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}. ${month}. ${day}.`;
  }
};

export { numberFormatter, dateFormatter };
