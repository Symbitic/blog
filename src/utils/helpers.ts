export function formatPostDate(dateStr: string) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return dateStr;
  }

  const date = new Date(dateStr);
  return date.toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
