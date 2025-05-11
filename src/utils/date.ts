
export function formatDate(dateStr: string) {
  if (!dateStr) return ''; 

  const inputDate = new Date(dateStr);
  if (isNaN(inputDate.getTime())) return ''; 

  const now = new Date();
  const diffMs = now.getTime() - inputDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    console.log(diffHours, diffMinutes);
    if (diffHours >= 1) {
      return `${diffHours}시간 전`;
    } else if (diffMinutes >= 1) {
      return `${diffMinutes}분 전`;
    } else {
      return '방금 전';
    }
  } else if (diffDays === 1) {
    return '1일 전';
  } else if (diffDays === 2) {
    return '2일 전';
  } else if (diffDays === 3) {
    return '3일 전';
  } else {
    // 날짜 포맷: 2024. 01. 02
    const yyyy = inputDate.getFullYear();
    const mm = String(inputDate.getMonth() + 1).padStart(2, '0');
    const dd = String(inputDate.getDate()).padStart(2, '0');
    return `${yyyy}. ${mm}. ${dd}`;
  }
}