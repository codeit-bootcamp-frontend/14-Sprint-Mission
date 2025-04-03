/**
 * 날짜 "YYYY.MM.DD" format.
 *
 * @param {string} isoDateString
 * @returns {string}
 */
export function formatDate(isoDateString: string): string {
  if (!isoDateString) {
    return '';
  }

  try {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}

export function getTimeDifference(updatedAt: string): string {
  const updatedAtDate = new Date(updatedAt);
  const now = new Date();

  const timeDifferenceInMilliseconds = now.getTime() - updatedAtDate.getTime();
  const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);

  if (timeDifferenceInHours < 24) {
    return Math.floor(timeDifferenceInHours) + '시간 전';
  } else {
    const timeDifferenceInDays = timeDifferenceInHours / 24;
    return Math.floor(timeDifferenceInDays) + '일 전';
  }
}
