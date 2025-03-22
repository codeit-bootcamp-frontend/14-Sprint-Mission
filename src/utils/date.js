/**
 * 날짜 "YYYY.MM.DD" format.
 *
 * @param {string} isoDateString
 * @returns {string}
 */
export function formatDate(isoDateString) {
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
