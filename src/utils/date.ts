/* 
export const isNextWeek = (date: Date) => {
  const sevenFromtoday = new Date(Date.now());
  sevenFromtoday.setDate(sevenFromtoday.getDate() + 7);
  return new Date(date) <= sevenFromtoday;
} */

export const isToday = (date: Date) => {
  const today = new Date(Date.now());
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    date.getDate() === day &&
    date.getMonth() === month &&
    date.getFullYear() === year
  );
};
